<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Frontend;

use Caputchin\WP\Assets;
use Caputchin\WP\Widget\WidgetMarkup;

defined( 'ABSPATH' ) || exit;

/**
 * The [caputchin] shortcode places the widget anywhere a shortcode runs.
 */
final class Shortcode {

	public function hooks(): void {
		add_shortcode( 'caputchin', array( $this, 'render' ) );
	}

	/**
	 * @param array<string,string>|string $atts Shortcode attributes.
	 */
	public function render( $atts ): string {
		$atts = shortcode_atts(
			array(
				'skin'      => null,
				'size'      => null,
				'locale'    => null,
				'invisible' => null,
				'trigger'   => null,
			),
			is_array( $atts ) ? $atts : array(),
			'caputchin'
		);

		$overrides = array();
		foreach ( array( 'skin', 'size', 'locale', 'trigger' ) as $key ) {
			if ( null !== $atts[ $key ] && '' !== $atts[ $key ] ) {
				$overrides[ $key ] = (string) $atts[ $key ];
			}
		}
		if ( null !== $atts['invisible'] ) {
			$overrides['invisible'] = filter_var( $atts['invisible'], FILTER_VALIDATE_BOOLEAN );
		}

		$markup = WidgetMarkup::render( $overrides );
		if ( '' === $markup ) {
			return '';
		}

		Assets::enqueue();
		return $markup;
	}
}
