<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Frontend;

use Caputchin\WP\Assets;
use Caputchin\WP\Widget\GameMarkup;

defined( 'ABSPATH' ) || exit;

/**
 * The Caputchin Game block. A dynamic (server-rendered) block so the live game
 * host is produced by the same markup builder as the [caputchin-game] shortcode.
 */
final class GameBlock {

	public function hooks(): void {
		add_action( 'init', array( $this, 'register' ) );
	}

	public function register(): void {
		register_block_type(
			CAPUTCHIN_DIR . 'src/Frontend/blocks/caputchin-game',
			array( 'render_callback' => array( $this, 'render' ) )
		);
	}

	/**
	 * @param array<string,mixed> $attributes Block attributes.
	 */
	public function render( $attributes ): string {
		$attributes = is_array( $attributes ) ? $attributes : array();

		$overrides = array();
		foreach ( array( 'game', 'games', 'game-src', 'layout', 'skin', 'locale', 'width', 'height' ) as $key ) {
			if ( isset( $attributes[ $key ] ) && '' !== $attributes[ $key ] ) {
				$overrides[ $key ] = (string) $attributes[ $key ];
			}
		}
		if ( isset( $attributes['no-verify'] ) ) {
			$overrides['no-verify'] = (bool) $attributes['no-verify'];
		}

		$markup = GameMarkup::render( $overrides );
		if ( '' === $markup ) {
			return '';
		}

		Assets::enqueue();
		return $markup;
	}
}
