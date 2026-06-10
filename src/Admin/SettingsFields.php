<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Admin;

use Caputchin\WP\Options;

defined( 'ABSPATH' ) || exit;

/**
 * Sanitizes the settings form input before it is stored.
 */
final class SettingsFields {

	private const SKINS    = array( 'auto', 'light', 'dark' );
	private const SIZES    = array( 'normal', 'compact' );
	private const TRIGGERS = array( 'auto', 'click', 'form-submit', 'manual' );

	/**
	 * Sanitize callback registered with register_setting().
	 *
	 * The secret is kept when the submitted value is blank, so it is never
	 * round-tripped through the browser and an empty save does not wipe it.
	 *
	 * @param mixed $input Raw posted value.
	 * @return array<string,mixed>
	 */
	public static function sanitize( $input ): array {
		if ( ! is_array( $input ) ) {
			$input = array();
		}

		$current = Options::all();
		$out     = Options::defaults();

		$out['sitekey'] = isset( $input['sitekey'] ) ? sanitize_text_field( $input['sitekey'] ) : '';

		$submitted_secret = isset( $input['secret'] ) ? trim( (string) $input['secret'] ) : '';
		$out['secret']    = ( '' === $submitted_secret )
			? (string) $current['secret']
			: sanitize_text_field( $submitted_secret );

		$skin                      = isset( $input['appearance']['skin'] ) ? (string) $input['appearance']['skin'] : 'auto';
		$out['appearance']['skin'] = in_array( $skin, self::SKINS, true ) ? $skin : 'auto';

		$size                      = isset( $input['appearance']['size'] ) ? (string) $input['appearance']['size'] : 'normal';
		$out['appearance']['size'] = in_array( $size, self::SIZES, true ) ? $size : 'normal';

		$trigger                      = isset( $input['appearance']['trigger'] ) ? (string) $input['appearance']['trigger'] : 'auto';
		$out['appearance']['trigger'] = in_array( $trigger, self::TRIGGERS, true ) ? $trigger : 'auto';

		$out['appearance']['locale']    = isset( $input['appearance']['locale'] ) ? sanitize_text_field( $input['appearance']['locale'] ) : '';
		$out['appearance']['invisible'] = ! empty( $input['appearance']['invisible'] );

		foreach ( array_keys( Options::integration_ids() ) as $id ) {
			$out['integrations'][ $id ] = ! empty( $input['integrations'][ $id ] );
		}

		return $out;
	}
}
