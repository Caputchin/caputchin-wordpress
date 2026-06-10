<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Tests\Verify;

use Brain\Monkey;
use Brain\Monkey\Functions;
use Caputchin\WP\Verify\ErrorMessages;
use Caputchin\WP\Verify\VerifyResult;
use PHPUnit\Framework\TestCase;

/**
 * Each verification outcome maps to a distinct, user-facing message.
 */
final class ErrorMessagesTest extends TestCase {

	protected function setUp(): void {
		parent::setUp();
		Monkey\setUp();
		// __( $text, $domain ) returns the text unchanged.
		Functions\when( '__' )->returnArg( 1 );
	}

	protected function tearDown(): void {
		Monkey\tearDown();
		parent::tearDown();
	}

	public function test_transport_error_message(): void {
		$msg = ErrorMessages::for_result( VerifyResult::transport( 'transport-error' ) );
		$this->assertStringContainsString( 'could not reach', $msg );
	}

	public function test_missing_token_message(): void {
		$msg = ErrorMessages::for_result( VerifyResult::failure( array( 'missing-input-response' ) ) );
		$this->assertStringContainsString( 'complete the verification', $msg );
	}

	public function test_secret_misconfig_message(): void {
		$msg = ErrorMessages::for_result( VerifyResult::failure( array( 'invalid-input-secret' ) ) );
		$this->assertStringContainsString( 'not configured', $msg );
	}

	public function test_expired_token_message(): void {
		$msg = ErrorMessages::for_result( VerifyResult::failure( array( 'invalid-input-response' ) ) );
		$this->assertStringContainsString( 'expired or was already used', $msg );
	}

	public function test_unknown_code_falls_back(): void {
		$msg = ErrorMessages::for_result( VerifyResult::failure( array( 'some-future-code' ) ) );
		$this->assertSame( 'Verification failed. Please try again.', $msg );
	}

	public function test_messages_are_distinct_per_class(): void {
		$messages = array(
			ErrorMessages::for_result( VerifyResult::transport( 'x' ) ),
			ErrorMessages::for_result( VerifyResult::failure( array( 'missing-input-response' ) ) ),
			ErrorMessages::for_result( VerifyResult::failure( array( 'invalid-input-secret' ) ) ),
			ErrorMessages::for_result( VerifyResult::failure( array( 'invalid-input-response' ) ) ),
		);
		$this->assertCount( 4, array_unique( $messages ) );
	}
}
