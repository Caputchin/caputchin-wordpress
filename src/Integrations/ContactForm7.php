<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

defined( 'ABSPATH' ) || exit;

/**
 * Protects Contact Form 7 forms.
 *
 * The widget is appended to the form markup and verification runs in the spam
 * check, which Contact Form 7 treats as a failed submission (fail-closed). The
 * form submits over AJAX, so the widget uses its default trigger and the token
 * it injects rides along in the AJAX payload.
 */
final class ContactForm7 extends AbstractIntegration {

	public static function id(): string {
		return 'cf7';
	}

	public static function is_active(): bool {
		return defined( 'WPCF7_VERSION' );
	}

	public function hooks(): void {
		if ( ! $this->enabled() ) {
			return;
		}
		add_filter( 'wpcf7_form_elements', array( $this, 'append_widget' ) );
		add_filter( 'wpcf7_spam', array( $this, 'check' ), 10, 2 );
	}

	/**
	 * @param string $elements The rendered form inner HTML.
	 */
	public function append_widget( $elements ): string {
		// Force 'auto': Contact Form 7 submits over AJAX and runs its own submit
		// handler, so a form-submit trigger would clash with it.
		return (string) $elements . $this->widget_field( 'auto' );
	}

	/**
	 * @param bool  $spam       Whether the submission is already flagged as spam.
	 * @param mixed $submission The Contact Form 7 submission (unused).
	 */
	public function check( $spam, $submission = null ): bool {
		if ( $spam ) {
			return true;
		}
		return ! $this->verify_request()->ok();
	}
}
