<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Widget;

use Caputchin\WP\Options;

defined( 'ABSPATH' ) || exit;

/**
 * Builds the <caputchin-game> element markup (the game host) from the stored
 * sitekey plus per-call attributes. Every attribute value is escaped.
 *
 * When a sitekey is set and no-verify is absent, the game element runs Caputchin
 * verification and injects the same hidden caputchin-token into the enclosing
 * form as <caputchin-widget>, so it verifies server-side the same way.
 */
final class GameMarkup {

	private const LAYOUTS = array( 'inline', 'modal', 'fullscreen', 'auto' );

	/**
	 * @param array<string,mixed> $atts Per-call attributes.
	 */
	public static function render( array $atts = array() ): string {
		$sitekey = Options::sitekey();
		if ( '' === $sitekey ) {
			return '';
		}

		$appearance = Options::appearance();
		$html       = '<caputchin-game sitekey="' . esc_attr( $sitekey ) . '"';

		if ( ! empty( $atts['game'] ) ) {
			$html .= ' game="' . esc_attr( (string) $atts['game'] ) . '"';
		}
		if ( ! empty( $atts['games'] ) ) {
			$html .= ' games="' . esc_attr( (string) $atts['games'] ) . '"';
		}
		if ( ! empty( $atts['game-src'] ) ) {
			$html .= ' game-src="' . esc_url( (string) $atts['game-src'] ) . '"';
		}

		$layout = isset( $atts['layout'] ) ? (string) $atts['layout'] : '';
		if ( in_array( $layout, self::LAYOUTS, true ) && 'auto' !== $layout ) {
			$html .= ' layout="' . esc_attr( $layout ) . '"';
		}

		$skin = isset( $atts['skin'] ) ? (string) $atts['skin'] : (string) ( $appearance['skin'] ?? 'auto' );
		if ( '' !== $skin && 'auto' !== $skin ) {
			$html .= ' skin="' . esc_attr( $skin ) . '"';
		}

		$locale = isset( $atts['locale'] ) ? (string) $atts['locale'] : (string) ( $appearance['locale'] ?? '' );
		if ( '' !== $locale ) {
			$html .= ' locale="' . esc_attr( $locale ) . '"';
		}

		foreach ( array( 'width', 'height' ) as $dim ) {
			if ( ! empty( $atts[ $dim ] ) ) {
				$html .= ' ' . $dim . '="' . esc_attr( (string) $atts[ $dim ] ) . '"';
			}
		}

		if ( ! empty( $atts['no-verify'] ) ) {
			$html .= ' no-verify';
		}

		$html .= '></caputchin-game>';
		return $html;
	}
}
