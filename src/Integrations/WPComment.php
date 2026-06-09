<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

defined( 'ABSPATH' ) || exit;

/**
 * Protects the WordPress comment form.
 */
final class WPComment extends AbstractIntegration {

	public static function id(): string {
		return 'wp_comment';
	}

	public static function is_active(): bool {
		return true;
	}

	public function hooks(): void {
		if ( ! $this->enabled() ) {
			return;
		}
		add_action( 'comment_form_after_fields', array( $this, 'field' ) );
		add_action( 'comment_form_logged_in_after', array( $this, 'field' ) );
		add_filter( 'preprocess_comment', array( $this, 'validate' ) );
	}

	public function field(): void {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WidgetMarkup escapes every attribute value; tag and attribute names are static.
		echo $this->widget_field();
	}

	/**
	 * @param array<string,mixed> $commentdata Prepared comment data.
	 * @return array<string,mixed>
	 */
	public function validate( $commentdata ) {
		// Verification only applies to the interactive comment form. Programmatic
		// and pingback/trackback comments have no widget and are left alone.
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return $commentdata;
		}
		$type = isset( $commentdata['comment_type'] ) ? (string) $commentdata['comment_type'] : '';
		if ( 'pingback' === $type || 'trackback' === $type ) {
			return $commentdata;
		}

		$result = $this->verify_request();
		if ( ! $result->ok() ) {
			wp_die(
				esc_html( $this->error_message( $result ) ),
				esc_html__( 'Comment blocked', 'caputchin' ),
				array(
					'response'  => 403,
					'back_link' => true,
				)
			);
		}
		return $commentdata;
	}
}
