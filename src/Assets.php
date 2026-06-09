<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP;

defined( 'ABSPATH' ) || exit;

/**
 * Registers the Caputchin widget loader and enqueues it only on requests that
 * actually render a widget.
 */
final class Assets {

	private const HANDLE = 'caputchin-widget';

	public function hooks(): void {
		add_action( 'wp_enqueue_scripts', array( $this, 'register' ) );
		add_filter( 'script_loader_tag', array( $this, 'add_defer' ), 10, 2 );
	}

	/**
	 * Register (not enqueue) on the front end so render paths can enqueue on
	 * demand and the script only loads on pages that show a widget.
	 */
	public function register(): void {
		if ( ! wp_script_is( self::HANDLE, 'registered' ) ) {
			// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion -- the version is pinned in the CDN path; a query version arg would defeat immutable caching.
			wp_register_script( self::HANDLE, self::src(), array(), null, true );
		}
	}

	/**
	 * The widget loader URL. Defaults to the published bundle; a site can
	 * repoint it with the CAPUTCHIN_WIDGET_SRC constant or this filter (used by
	 * the local test environment to serve a locally built bundle).
	 */
	public static function src(): string {
		return (string) apply_filters( 'caputchin_widget_src', CAPUTCHIN_WIDGET_SRC );
	}

	/**
	 * Mark the widget script for output on this request. Safe to call from a
	 * render hook; registers on the fly if early registration has not run (for
	 * example on wp-login.php).
	 */
	public static function enqueue(): void {
		if ( ! wp_script_is( self::HANDLE, 'registered' ) ) {
			// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion -- the version is pinned in the CDN path; a query version arg would defeat immutable caching.
			wp_register_script( self::HANDLE, self::src(), array(), null, true );
		}
		wp_enqueue_script( self::HANDLE );
	}

	/**
	 * Load the widget loader with defer so it does not block rendering. Defer
	 * keeps execution order, which the loader relies on to find its sibling
	 * assets relative to its own script URL.
	 *
	 * @param string $tag    The script tag.
	 * @param string $handle The script handle.
	 */
	public function add_defer( string $tag, string $handle ): string {
		if ( self::HANDLE !== $handle ) {
			return $tag;
		}
		if ( false !== strpos( $tag, ' defer' ) ) {
			return $tag;
		}
		return str_replace( '<script ', '<script defer ', $tag );
	}
}
