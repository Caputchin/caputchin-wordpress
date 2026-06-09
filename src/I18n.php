<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP;

defined( 'ABSPATH' ) || exit;

/**
 * Loads the plugin text domain for translations.
 */
final class I18n {

	public static function load(): void {
		load_plugin_textdomain(
			'caputchin',
			false,
			dirname( plugin_basename( CAPUTCHIN_FILE ) ) . '/languages'
		);
	}
}
