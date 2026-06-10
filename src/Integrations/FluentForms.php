<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

defined( 'ABSPATH' ) || exit;

/**
 * Protects Fluent Forms forms.
 *
 * The widget renders before the submit button and verification runs in the
 * validation filter, where a returned error blocks the submission (fail-closed).
 * Fluent Forms submits over AJAX and runs its own submit handler, so the widget
 * uses the auto trigger and the token it injects rides along in the AJAX payload.
 */
final class FluentForms extends AbstractIntegration {

	public static function id(): string {
		return 'fluent_forms';
	}

	public static function is_active(): bool {
		return defined( 'FLUENTFORM' );
	}

	public function hooks(): void {
		if ( ! $this->enabled() ) {
			return;
		}
		add_action( 'fluentform/render_item_submit_button', array( $this, 'field' ), 10, 2 );
		add_filter( 'fluentform/validation_errors', array( $this, 'validate' ) );
	}

	/**
	 * @param array<string,mixed> $submit_button The submit-button settings (unused).
	 * @param object|null         $form          The form (unused).
	 */
	public function field( $submit_button = array(), $form = null ): void {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WidgetMarkup escapes every attribute value; tag and attribute names are static.
		echo $this->widget_field( 'auto' );
	}

	/**
	 * @param array<string,mixed> $errors Field validation errors keyed by field name.
	 * @return array<string,mixed>
	 */
	public function validate( $errors ) {
		if ( ! is_array( $errors ) ) {
			$errors = array();
		}
		$result = $this->verify_request();
		if ( ! $result->ok() ) {
			$errors['caputchin-token'] = array( $this->error_message( $result ) );
		}
		return $errors;
	}
}
