<?php
/**
 * PHPUnit bootstrap. Loads the Composer autoloader and defines the ABSPATH
 * guard that every source file checks, so classes load outside WordPress.
 *
 * @package Caputchin\WP
 */

require_once __DIR__ . '/../vendor/autoload.php';

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', sys_get_temp_dir() . '/caputchin-tests/' );
}
