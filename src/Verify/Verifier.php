<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Verify;

defined( 'ABSPATH' ) || exit;

/**
 * Posts a token to the Caputchin verification endpoint and returns the outcome.
 *
 * Fail-closed by construction: an empty token, a missing secret, a transport
 * error, a non-200 status, a malformed body, or anything other than an explicit
 * success flag all return a non-ok result. Only success === true passes.
 *
 * The score and other metadata in the response are client-claimed values and
 * are never inspected for the trust decision.
 */
final class Verifier {

	/**
	 * @var string
	 */
	private $secret;

	/**
	 * @var string
	 */
	private $endpoint;

	public function __construct( string $secret, ?string $endpoint = null ) {
		$this->secret   = $secret;
		$this->endpoint = ( null !== $endpoint && '' !== $endpoint )
			? $endpoint
			: ( defined( 'CAPUTCHIN_VERIFY_URL' ) ? CAPUTCHIN_VERIFY_URL : 'https://verify.caputchin.com/v1/siteverify' );
	}

	public function verify( string $token ): VerifyResult {
		$token = trim( $token );
		if ( '' === $token ) {
			return VerifyResult::failure( array( 'missing-input-response' ) );
		}
		if ( '' === $this->secret ) {
			return VerifyResult::failure( array( 'missing-input-secret' ) );
		}

		$response = wp_remote_post(
			$this->endpoint,
			array(
				'method'      => 'POST',
				'timeout'     => 10,
				'redirection' => 0,
				'sslverify'   => true,
				'headers'     => array( 'Content-Type' => 'application/json' ),
				'body'        => wp_json_encode(
					array(
						'secret'   => $this->secret,
						'response' => $token,
					)
				),
			)
		);

		if ( is_wp_error( $response ) ) {
			return VerifyResult::transport( 'transport-error' );
		}

		$status = (int) wp_remote_retrieve_response_code( $response );
		if ( 200 !== $status ) {
			return VerifyResult::transport( 'bad-status-' . $status );
		}

		$data = json_decode( wp_remote_retrieve_body( $response ), true );
		if ( ! is_array( $data ) ) {
			return VerifyResult::transport( 'malformed-response' );
		}

		if ( isset( $data['success'] ) && true === $data['success'] ) {
			return VerifyResult::success();
		}

		$error_codes = array();
		if ( isset( $data['error-codes'] ) && is_array( $data['error-codes'] ) ) {
			$error_codes = array_map( 'strval', $data['error-codes'] );
		}
		if ( empty( $error_codes ) ) {
			$error_codes = array( 'verification-failed' );
		}
		return VerifyResult::failure( $error_codes );
	}
}
