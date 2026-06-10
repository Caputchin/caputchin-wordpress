<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Tests\Verify;

use Brain\Monkey;
use Brain\Monkey\Functions;
use Caputchin\WP\Verify\Verifier;
use PHPUnit\Framework\TestCase;

/**
 * Fail-closed coverage for the verification core.
 */
final class VerifierTest extends TestCase {

	private const ENDPOINT = 'https://verify.example.test/v1/siteverify';
	private const SECRET   = 'cpt_sec_test';

	protected function setUp(): void {
		parent::setUp();
		Monkey\setUp();
		Functions\when( 'wp_json_encode' )->alias( 'json_encode' );
	}

	protected function tearDown(): void {
		Monkey\tearDown();
		parent::tearDown();
	}

	private function verifier(): Verifier {
		return new Verifier( self::SECRET, self::ENDPOINT );
	}

	/**
	 * Stub the HTTP layer to return a non-error response with the given body.
	 */
	private function stub_response( string $body, int $code = 200 ): void {
		Functions\when( 'is_wp_error' )->justReturn( false );
		Functions\when( 'wp_remote_post' )->justReturn( array( 'body' => $body ) );
		Functions\when( 'wp_remote_retrieve_response_code' )->justReturn( $code );
		Functions\when( 'wp_remote_retrieve_body' )->justReturn( $body );
	}

	public function test_empty_token_fails_without_network(): void {
		// wp_remote_post is intentionally not stubbed: if the verifier called it,
		// Brain Monkey would error. The empty-token path must return first.
		$result = $this->verifier()->verify( '' );
		$this->assertFalse( $result->ok() );
		$this->assertSame( 'missing-input-response', $result->first_code() );
	}

	public function test_missing_secret_fails(): void {
		$result = ( new Verifier( '', self::ENDPOINT ) )->verify( 'a-token' );
		$this->assertFalse( $result->ok() );
		$this->assertSame( 'missing-input-secret', $result->first_code() );
	}

	public function test_transport_error_fails_closed(): void {
		Functions\when( 'is_wp_error' )->justReturn( true );
		Functions\when( 'wp_remote_post' )->justReturn( 'wp-error' );
		$result = $this->verifier()->verify( 'a-token' );
		$this->assertFalse( $result->ok() );
		$this->assertTrue( $result->transport_error() );
	}

	public function test_non_200_fails_closed(): void {
		$this->stub_response( '{"success":true}', 500 );
		$result = $this->verifier()->verify( 'a-token' );
		$this->assertFalse( $result->ok() );
		$this->assertTrue( $result->transport_error() );
	}

	public function test_malformed_body_fails_closed(): void {
		$this->stub_response( 'not-json', 200 );
		$result = $this->verifier()->verify( 'a-token' );
		$this->assertFalse( $result->ok() );
		$this->assertTrue( $result->transport_error() );
	}

	public function test_success_false_fails_with_error_code(): void {
		$this->stub_response( '{"success":false,"error-codes":["invalid-input-response"]}' );
		$result = $this->verifier()->verify( 'a-token' );
		$this->assertFalse( $result->ok() );
		$this->assertSame( 'invalid-input-response', $result->first_code() );
	}

	public function test_success_false_without_codes_uses_fallback(): void {
		$this->stub_response( '{"success":false}' );
		$result = $this->verifier()->verify( 'a-token' );
		$this->assertFalse( $result->ok() );
		$this->assertSame( 'verification-failed', $result->first_code() );
	}

	public function test_non_boolean_success_fails_closed(): void {
		// A string "true" or the number 1 must not pass: the contract is a strict
		// JSON boolean.
		$this->stub_response( '{"success":"true"}' );
		$this->assertFalse( $this->verifier()->verify( 'a-token' )->ok() );

		$this->stub_response( '{"success":1}' );
		$this->assertFalse( $this->verifier()->verify( 'a-token' )->ok() );
	}

	public function test_success_true_passes_and_ignores_metadata(): void {
		$this->stub_response( '{"success":true,"platform":{"score":0.1,"game_id":"x"}}' );
		$result = $this->verifier()->verify( 'a-token' );
		$this->assertTrue( $result->ok() );
		$this->assertSame( array(), $result->error_codes() );
	}
}
