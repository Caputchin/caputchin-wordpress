<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Frontend;

use Caputchin\WP\Assets;
use Caputchin\WP\Widget\WidgetMarkup;

defined( 'ABSPATH' ) || exit;

/**
 * The Caputchin block. A dynamic (server-rendered) block so the live web
 * component is produced by the same markup builder as the shortcode.
 */
final class Block {

	public function hooks(): void {
		add_action( 'init', array( $this, 'register' ) );
	}

	public function register(): void {
		register_block_type(
			CAPUTCHIN_DIR . 'src/Frontend/blocks/caputchin-widget',
			array( 'render_callback' => array( $this, 'render' ) )
		);
	}

	/**
	 * @param array<string,mixed> $attributes Block attributes.
	 */
	public function render( $attributes ): string {
		$attributes = is_array( $attributes ) ? $attributes : array();

		$overrides = array();
		foreach ( array( 'skin', 'size', 'locale' ) as $key ) {
			if ( isset( $attributes[ $key ] ) && '' !== $attributes[ $key ] ) {
				$overrides[ $key ] = (string) $attributes[ $key ];
			}
		}
		if ( isset( $attributes['invisible'] ) ) {
			$overrides['invisible'] = (bool) $attributes['invisible'];
		}

		$markup = WidgetMarkup::render( $overrides );
		if ( '' === $markup ) {
			return '';
		}

		Assets::enqueue();
		return $markup;
	}
}
