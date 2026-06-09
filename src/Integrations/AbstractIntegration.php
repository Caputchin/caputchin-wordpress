<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

use Caputchin\WP\Assets;
use Caputchin\WP\Options;
use Caputchin\WP\Verify\ErrorMessages;
use Caputchin\WP\Verify\Verifier;
use Caputchin\WP\Verify\VerifyResult;
use Caputchin\WP\Widget\WidgetMarkup;

defined( 'ABSPATH' ) || exit;

/**
 * Shared behavior for every form adapter: reading the token, verifying it, and
 * rendering the widget. Subclasses wire the host-specific render and validation
 * hooks.
 */
abstract class AbstractIntegration implements IntegrationInterface {

	/**
	 * Whether this surface is enabled in the plugin settings.
	 */
	protected function enabled(): bool {
		return Options::is_integration_enabled( static::id() );
	}

	/**
	 * The token the widget injected into the submitted form.
	 *
	 * The token is not trusted here; it is proven only by the server-side
	 * verification call. The surrounding form carries its own nonce, so no extra
	 * nonce check applies to this field.
	 */
	protected function token_from_request(): string {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing -- token is validated server-side via siteverify; the host form supplies its own nonce.
		if ( ! isset( $_POST['caputchin-token'] ) ) {
			return '';
		}
		// The token is a compact base64url string, which sanitize_text_field
		// leaves intact. If the token format ever includes a character this
		// strips, revisit this so a valid token cannot be silently mangled.
		// phpcs:ignore WordPress.Security.NonceVerification.Missing -- see above.
		return sanitize_text_field( wp_unslash( $_POST['caputchin-token'] ) );
	}

	/**
	 * Verify the submitted token. Fail-closed by construction (see Verifier).
	 */
	protected function verify_request(): VerifyResult {
		$verifier = new Verifier( Options::secret() );
		return $verifier->verify( $this->token_from_request() );
	}

	/**
	 * Markup for the widget inside a form.
	 *
	 * Native (non-AJAX) forms pass the default 'form-submit' trigger so the
	 * widget gates the native submit. AJAX form plugins, which run their own
	 * submit handler, pass '' to leave the widget on its default trigger and
	 * rely on the server-side check instead.
	 *
	 * @param string $trigger Widget trigger, or '' to omit the attribute.
	 */
	protected function widget_field( string $trigger = 'form-submit' ): string {
		Assets::enqueue();
		$overrides = array();
		if ( '' !== $trigger ) {
			$overrides['trigger'] = $trigger;
		}
		return WidgetMarkup::render( $overrides );
	}

	protected function error_message( VerifyResult $result ): string {
		return ErrorMessages::for_result( $result );
	}
}
