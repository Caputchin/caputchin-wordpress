<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Verify;

defined( 'ABSPATH' ) || exit;

/**
 * Maps a verification outcome to a distinct, user-facing message.
 */
final class ErrorMessages {

	public static function for_result( VerifyResult $result ): string {
		if ( $result->transport_error() ) {
			return __( 'We could not reach the verification service. Please try again.', 'caputchin' );
		}

		switch ( $result->first_code() ) {
			case 'missing-input-response':
				return __( 'Please complete the verification challenge before submitting.', 'caputchin' );

			case 'missing-input-secret':
			case 'invalid-input-secret':
				return __( 'Verification is not configured correctly on this site. Please contact the site owner.', 'caputchin' );

			case 'invalid-input-response':
			case 'timeout-or-duplicate':
				return __( 'Your verification expired or was already used. Please try again.', 'caputchin' );

			default:
				return __( 'Verification failed. Please try again.', 'caputchin' );
		}
	}
}
