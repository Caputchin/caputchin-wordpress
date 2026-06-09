<?php
/**
 * Removes plugin data on uninstall.
 *
 * @package Caputchin\WP
 */

defined( 'WP_UNINSTALL_PLUGIN' ) || exit;

$caputchin_option = 'caputchin_settings';

delete_option( $caputchin_option );

if ( is_multisite() ) {
	$caputchin_site_ids = get_sites(
		array(
			'fields' => 'ids',
			'number' => 0,
		)
	);
	foreach ( $caputchin_site_ids as $caputchin_site_id ) {
		switch_to_blog( (int) $caputchin_site_id );
		delete_option( $caputchin_option );
		restore_current_blog();
	}
}
