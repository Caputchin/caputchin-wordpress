<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

use Caputchin\WP\Assets;

defined( 'ABSPATH' ) || exit;

/**
 * Protects the lost-password form.
 */
final class WPLostPassword extends AbstractIntegration {

	public static function id(): string {
		return 'wp_lost_password';
	}

	public static function is_active(): bool {
		return true;
	}

	public function hooks(): void {
		if ( ! $this->enabled() ) {
			return;
		}
		add_action( 'login_enqueue_scripts', array( Assets::class, 'enqueue' ) );
		add_action( 'lostpassword_form', array( $this, 'field' ) );
		add_action( 'lostpassword_post', array( $this, 'validate' ) );
	}

	public function field(): void {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WidgetMarkup escapes every attribute value; tag and attribute names are static.
		echo $this->widget_field();
	}

	/**
	 * @param \WP_Error $errors Lost-password errors.
	 */
	public function validate( $errors ): void {
		$result = $this->verify_request();
		if ( ! $result->ok() ) {
			$errors->add( 'caputchin_failed', $this->error_message( $result ) );
		}
	}
}
