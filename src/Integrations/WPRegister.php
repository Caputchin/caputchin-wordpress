<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

use Caputchin\WP\Assets;

defined( 'ABSPATH' ) || exit;

/**
 * Protects the user registration form.
 */
final class WPRegister extends AbstractIntegration {

	public static function id(): string {
		return 'wp_register';
	}

	public static function is_active(): bool {
		return (bool) get_option( 'users_can_register' );
	}

	public function hooks(): void {
		if ( ! $this->enabled() ) {
			return;
		}
		add_action( 'login_enqueue_scripts', array( Assets::class, 'enqueue' ) );
		add_action( 'register_form', array( $this, 'field' ) );
		add_filter( 'registration_errors', array( $this, 'validate' ), 10, 3 );
	}

	public function field(): void {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WidgetMarkup escapes every attribute value; tag and attribute names are static.
		echo $this->widget_field();
	}

	/**
	 * @param \WP_Error $errors               Registration errors.
	 * @param string    $sanitized_user_login Submitted login.
	 * @param string    $user_email           Submitted email.
	 * @return \WP_Error
	 */
	public function validate( $errors, $sanitized_user_login = '', $user_email = '' ) {
		$result = $this->verify_request();
		if ( ! $result->ok() ) {
			$errors->add( 'caputchin_failed', $this->error_message( $result ) );
		}
		return $errors;
	}
}
