<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP;

defined( 'ABSPATH' ) || exit;

/**
 * Plugin bootstrapper. Wires each component as it loads.
 */
final class Plugin {

	/**
	 * @var Plugin|null
	 */
	private static $instance = null;

	public static function instance(): Plugin {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct() {}

	/**
	 * Register hooks. Admin settings, asset enqueue, the widget block and
	 * shortcode, and the form integrations are added here as each component
	 * lands.
	 */
	public function boot(): void {
		( new Assets() )->hooks();
		( new Frontend\Shortcode() )->hooks();
		( new Frontend\Block() )->hooks();
		( new Frontend\GameShortcode() )->hooks();
		( new Frontend\GameBlock() )->hooks();
		( new Integrations\Registry() )->boot();

		if ( is_admin() ) {
			( new Admin\SettingsPage() )->hooks();
		}
	}
}
