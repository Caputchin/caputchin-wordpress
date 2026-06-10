<?php
/**
 * Dependency manifest for the block editor script. Hand-maintained because the
 * editor script is plain JavaScript with no build step.
 *
 * @package Caputchin\WP
 */

return array(
	'dependencies' => array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n' ),
	'version'      => '0.1.0',
);
