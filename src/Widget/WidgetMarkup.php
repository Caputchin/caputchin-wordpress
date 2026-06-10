<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Widget;

use Caputchin\WP\Options;

defined( 'ABSPATH' ) || exit;

/**
 * Builds the <caputchin-widget> element markup from the stored appearance
 * settings plus any per-call overrides (a block, a shortcode, or an adapter
 * setting a context-specific trigger). Every attribute value is escaped.
 */
final class WidgetMarkup {

	/**
	 * @param array<string,mixed> $overrides Per-call attribute overrides.
	 */
	public static function render( array $overrides = array() ): string {
		$sitekey = Options::sitekey();
		if ( '' === $sitekey ) {
			return '';
		}

		$appearance = array_merge( Options::appearance(), $overrides );
		$attrs      = array( 'sitekey' => $sitekey );

		$skin = isset( $appearance['skin'] ) ? (string) $appearance['skin'] : 'auto';
		if ( '' !== $skin && 'auto' !== $skin ) {
			$attrs['skin'] = $skin;
		}

		$size = isset( $appearance['size'] ) ? (string) $appearance['size'] : 'normal';
		if ( '' !== $size && 'normal' !== $size ) {
			$attrs['size'] = $size;
		}

		$locale = isset( $appearance['locale'] ) ? (string) $appearance['locale'] : '';
		if ( '' !== $locale ) {
			$attrs['locale'] = $locale;
		}

		// Trigger comes from the configured default (merged above) or a per-call
		// override (shortcode/block). Emit only a recognized non-default trigger;
		// 'auto', empty, or any unrecognized value falls through to the widget's
		// own default (auto). This validates the override path the same way the
		// settings sanitizer validates the stored default.
		$trigger = isset( $appearance['trigger'] ) ? (string) $appearance['trigger'] : 'auto';
		if ( in_array( $trigger, array( 'click', 'form-submit', 'manual' ), true ) ) {
			$attrs['trigger'] = $trigger;
		}

		$html = '<caputchin-widget';
		foreach ( $attrs as $name => $value ) {
			$html .= ' ' . $name . '="' . esc_attr( $value ) . '"';
		}
		if ( ! empty( $appearance['invisible'] ) ) {
			$html .= ' invisible';
		}
		$html .= '></caputchin-widget>';

		return $html;
	}
}
