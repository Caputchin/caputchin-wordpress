<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Frontend;

use Caputchin\WP\Assets;
use Caputchin\WP\Widget\GameMarkup;

defined( 'ABSPATH' ) || exit;

/**
 * The [caputchin-game] shortcode places the game host widget (<caputchin-game>).
 */
final class GameShortcode {

	public function hooks(): void {
		add_shortcode( 'caputchin-game', array( $this, 'render' ) );
	}

	/**
	 * @param array<string,string>|string $atts Shortcode attributes.
	 */
	public function render( $atts ): string {
		$atts = shortcode_atts(
			array(
				'game'      => null,
				'games'     => null,
				'game-src'  => null,
				'layout'    => null,
				'skin'      => null,
				'locale'    => null,
				'width'     => null,
				'height'    => null,
				'no-verify' => null,
			),
			is_array( $atts ) ? $atts : array(),
			'caputchin-game'
		);

		$overrides = array();
		foreach ( array( 'game', 'games', 'game-src', 'layout', 'skin', 'locale', 'width', 'height' ) as $key ) {
			if ( null !== $atts[ $key ] && '' !== $atts[ $key ] ) {
				$overrides[ $key ] = (string) $atts[ $key ];
			}
		}
		if ( null !== $atts['no-verify'] ) {
			$overrides['no-verify'] = filter_var( $atts['no-verify'], FILTER_VALIDATE_BOOLEAN );
		}

		$markup = GameMarkup::render( $overrides );
		if ( '' === $markup ) {
			return '';
		}

		Assets::enqueue();
		return $markup;
	}
}
