<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP;

defined( 'ABSPATH' ) || exit;

/**
 * Registers the Caputchin widget loader plus a small layout stylesheet, and
 * enqueues them only on requests that actually render a widget.
 */
final class Assets {

	private const SCRIPT_HANDLE = 'caputchin-widget';
	private const STYLE_HANDLE  = 'caputchin-widget-layout';

	public function hooks(): void {
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ) );
		add_filter( 'script_loader_tag', array( $this, 'add_defer' ), 10, 2 );
	}

	/**
	 * Register (not enqueue) the loader script and the layout stylesheet, so
	 * render paths enqueue on demand and the assets load only on pages that show
	 * a widget.
	 */
	public static function register_assets(): void {
		if ( ! wp_script_is( self::SCRIPT_HANDLE, 'registered' ) ) {
			// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion -- the version is pinned in the CDN path; a query version arg would defeat immutable caching.
			wp_register_script( self::SCRIPT_HANDLE, self::src(), array(), null, true );
		}
		if ( ! wp_style_is( self::STYLE_HANDLE, 'registered' ) ) {
			wp_register_style( self::STYLE_HANDLE, CAPUTCHIN_URL . 'assets/caputchin.css', array(), CAPUTCHIN_VERSION );
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
	 * Mark the widget assets for output on this request. Safe to call from a
	 * render hook; registers on the fly if early registration has not run (for
	 * example on wp-login.php).
	 */
	public static function enqueue(): void {
		self::register_assets();
		wp_enqueue_script( self::SCRIPT_HANDLE );
		wp_enqueue_style( self::STYLE_HANDLE );
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
		if ( self::SCRIPT_HANDLE !== $handle ) {
			return $tag;
		}
		if ( false !== strpos( $tag, ' defer' ) ) {
			return $tag;
		}
		return str_replace( '<script ', '<script defer ', $tag );
	}
}
