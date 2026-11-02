<?php
/**
 * PHPUnit bootstrap. Defines the ABSPATH guard that every source file checks,
 * so classes load outside WordPress, then loads the Composer autoloader.
 *
 * @package Caputchin\WP
 */

if ( ! defined( 'ABSPATH' ) ) {
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedConstantFound -- WordPress core constant, stubbed for tests.
	define( 'ABSPATH', sys_get_temp_dir() . '/caputchin-tests/' );
}

require_once __DIR__ . '/../vendor/autoload.php';
