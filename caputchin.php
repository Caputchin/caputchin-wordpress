<?php
/**
 * Plugin Name:       Caputchin
 * Plugin URI:        https://caputchin.com
 * Description:       Add the Caputchin bot-verification widget to WordPress forms and verify on your server. Privacy-first, surveillance-free.
 * x-release-please-start-version
 * Version:           0.1.0
 * x-release-please-end
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Caputchin
 * Author URI:        https://caputchin.com
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       caputchin
 *
 * @package Caputchin\WP
 */

namespace Caputchin\WP;

defined( 'ABSPATH' ) || exit;

/* x-release-please-start-version */
define( 'CAPUTCHIN_VERSION', '0.1.0' );
/* x-release-please-end */
define( 'CAPUTCHIN_FILE', __FILE__ );
define( 'CAPUTCHIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'CAPUTCHIN_URL', plugin_dir_url( __FILE__ ) );
if ( ! defined( 'CAPUTCHIN_VERIFY_URL' ) ) {
	/*
	 * Default: Caputchin's hosted verification endpoint. A site can repoint this
	 * (define it in wp-config.php) for a self-hosted backend or a local test
	 * environment. It is a constant, not a filter, because the verification host
	 * is security sensitive and should only be changed by a site administrator.
	 *
	 * A custom endpoint must implement the same response contract: JSON with a
	 * boolean "success" field. Only the strict boolean true passes; any other
	 * value (including the string "true" or 1) fails closed.
	 */
	define( 'CAPUTCHIN_VERIFY_URL', 'https://verify.caputchin.com/v1/siteverify' );
}

if ( ! defined( 'CAPUTCHIN_WIDGET_SRC' ) ) {
	/*
	 * Prod default: the published widget bundle on jsDelivr. A site can repoint
	 * this (define it in wp-config.php, or filter caputchin_widget_src) at a
	 * locally served bundle. This matters because the widget's verification
	 * host is fixed inside the bundle when it is built and cannot be changed
	 * per page, so a local end-to-end test must serve a locally built bundle.
	 */
	define( 'CAPUTCHIN_WIDGET_SRC', 'https://cdn.jsdelivr.net/npm/@caputchin/widget@3/dist/widget.js' );
}

/**
 * Minimal PSR-4 autoloader for the Caputchin\WP namespace. Runtime has no
 * Composer dependency; Composer is dev-only (phpcs, phpunit).
 */
spl_autoload_register(
	function ( $class_name ) {
		$prefix = 'Caputchin\\WP\\';
		$len    = strlen( $prefix );
		if ( 0 !== strncmp( $prefix, $class_name, $len ) ) {
			return;
		}
		$relative = substr( $class_name, $len );
		$path     = CAPUTCHIN_DIR . 'src/' . str_replace( '\\', '/', $relative ) . '.php';
		if ( is_readable( $path ) ) {
			require $path;
		}
	}
);

// Boot on plugins_loaded so that adapters detecting other plugins (Contact
// Form 7, WPForms, Fluent Forms) see them: those plugins load after this one
// and only their presence at boot decides whether an adapter registers.
add_action( 'plugins_loaded', array( Plugin::instance(), 'boot' ) );
