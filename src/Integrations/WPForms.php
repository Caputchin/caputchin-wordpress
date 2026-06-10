<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

defined( 'ABSPATH' ) || exit;

/**
 * Protects WPForms forms.
 *
 * The widget renders before the submit button and verification runs during
 * processing, where a form-level error blocks the submission (fail-closed).
 * WPForms submits over AJAX and runs its own submit handler, so the widget uses
 * the auto trigger and the token it injects rides along in the AJAX payload.
 */
final class WPForms extends AbstractIntegration {

	public static function id(): string {
		return 'wpforms';
	}

	public static function is_active(): bool {
		return function_exists( 'wpforms' );
	}

	public function hooks(): void {
		if ( ! $this->enabled() ) {
			return;
		}
		add_action( 'wpforms_display_submit_before', array( $this, 'field' ) );
		add_action( 'wpforms_process', array( $this, 'validate' ), 10, 3 );
	}

	/**
	 * @param array<string,mixed> $form_data Form data and settings (unused).
	 */
	public function field( $form_data = array() ): void {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WidgetMarkup escapes every attribute value; tag and attribute names are static.
		echo $this->widget_field( 'auto' );
	}

	/**
	 * @param array<int,mixed>    $fields    Processed field values (unused).
	 * @param array<string,mixed> $entry     Raw entry (unused).
	 * @param array<string,mixed> $form_data Form data and settings.
	 */
	public function validate( $fields, $entry, $form_data ): void {
		$result = $this->verify_request();
		if ( $result->ok() ) {
			return;
		}
		$form_id = isset( $form_data['id'] ) ? absint( $form_data['id'] ) : 0;
		wpforms()->process->errors[ $form_id ]['header'] = $this->error_message( $result );
	}
}
