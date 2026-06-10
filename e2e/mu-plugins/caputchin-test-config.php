<?php
/**
 * Optional test-environment overrides, read from the container environment.
 *
 * This is NOT part of the shipped plugin. It is mounted into wp-content/mu-plugins
 * only by e2e/docker-compose.yml, and mu-plugins load before regular plugins,
 * so these defines win over the plugin defaults.
 *
 * With no overrides set, nothing is defined here and the plugin uses its
 * defaults: the published widget bundle and the hosted verification service.
 * Setting CAPUTCHIN_WIDGET_SRC or CAPUTCHIN_VERIFY_URL in the environment points
 * the widget or the server-side check at a different build or endpoint.
 *
 * @package Caputchin\WP
 */

defined( 'ABSPATH' ) || exit;

$caputchin_widget_src = getenv( 'CAPUTCHIN_WIDGET_SRC' );
if ( is_string( $caputchin_widget_src ) && '' !== $caputchin_widget_src && ! defined( 'CAPUTCHIN_WIDGET_SRC' ) ) {
	define( 'CAPUTCHIN_WIDGET_SRC', $caputchin_widget_src );
}

$caputchin_verify_url = getenv( 'CAPUTCHIN_VERIFY_URL' );
if ( is_string( $caputchin_verify_url ) && '' !== $caputchin_verify_url && ! defined( 'CAPUTCHIN_VERIFY_URL' ) ) {
	define( 'CAPUTCHIN_VERIFY_URL', $caputchin_verify_url );
}
