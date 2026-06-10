<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

defined( 'ABSPATH' ) || exit;

/**
 * Boots every adapter whose host plugin or feature is present. Each adapter
 * then no-ops if it is disabled in settings.
 */
final class Registry {

	/**
	 * @var string[]
	 */
	private const ADAPTERS = array(
		WPComment::class,
		WPLogin::class,
		WPRegister::class,
		WPLostPassword::class,
		ContactForm7::class,
		WPForms::class,
		FluentForms::class,
	);

	public function boot(): void {
		foreach ( self::ADAPTERS as $class ) {
			if ( $class::is_active() ) {
				$adapter = new $class();
				$adapter->hooks();
			}
		}
	}

	/**
	 * Ids of adapters whose host plugin or feature is present. Used by the
	 * settings page to show which surfaces are available.
	 *
	 * @return string[]
	 */
	public static function active_ids(): array {
		$ids = array();
		foreach ( self::ADAPTERS as $class ) {
			if ( $class::is_active() ) {
				$ids[] = $class::id();
			}
		}
		return $ids;
	}
}
