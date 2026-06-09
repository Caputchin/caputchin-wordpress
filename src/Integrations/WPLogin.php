<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

use Caputchin\WP\Assets;

defined( 'ABSPATH' ) || exit;

/**
 * Protects the login form (wp-login.php and the wp_login_form() front-end form).
 */
final class WPLogin extends AbstractIntegration {

	public static function id(): string {
		return 'wp_login';
	}

	public static function is_active(): bool {
		return true;
	}

	public function hooks(): void {
		if ( ! $this->enabled() ) {
			return;
		}
		add_action( 'login_enqueue_scripts', array( Assets::class, 'enqueue' ) );
		add_action( 'login_form', array( $this, 'field' ) );
		add_filter( 'login_form_middle', array( $this, 'form_middle' ), 10, 1 );
		add_filter( 'authenticate', array( $this, 'validate' ), 30, 3 );
	}

	/**
	 * Render the widget on the wp-login.php login form.
	 */
	public function field(): void {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WidgetMarkup escapes every attribute value; tag and attribute names are static.
		echo $this->widget_field();
	}

	/**
	 * Inject the widget into wp_login_form() output (front-end login forms),
	 * which exposes a filter rather than an action inside the form.
	 *
	 * @param string $content The login form middle content.
	 */
	public function form_middle( $content ): string {
		return (string) $content . $this->widget_field();
	}

	/**
	 * Require a passing token on the interactive login form. Fail-closed.
	 *
	 * @param \WP_User|\WP_Error|null $user     Result of prior authenticators.
	 * @param string                  $username Submitted username.
	 * @param string                  $password Submitted password.
	 * @return \WP_User|\WP_Error|null
	 */
	public function validate( $user, $username = '', $password = '' ) {
		// API authentication paths (REST, XML-RPC, application passwords) carry
		// no widget, so they are left untouched.
		if ( ( defined( 'REST_REQUEST' ) && REST_REQUEST ) || ( defined( 'XMLRPC_REQUEST' ) && XMLRPC_REQUEST ) ) {
			return $user;
		}

		// The widget only renders on the wp-login.php form path (front-end forms
		// post there too). $pagenow is derived by core from the script name, not
		// from any client-supplied field, so it cannot be dropped to skip this
		// check. Programmatic sign-ins elsewhere, with no widget, are left alone.
		if ( ! isset( $GLOBALS['pagenow'] ) || 'wp-login.php' !== $GLOBALS['pagenow'] ) {
			return $user;
		}

		// Not a credential submission (a logout, or the GET that renders the form).
		if ( '' === (string) $username ) {
			return $user;
		}

		// Interactive login attempt: a passing token is required. A missing or
		// invalid token fails closed.
		$result = $this->verify_request();
		if ( ! $result->ok() ) {
			return new \WP_Error( 'caputchin_failed', $this->error_message( $result ) );
		}
		return $user;
	}
}
