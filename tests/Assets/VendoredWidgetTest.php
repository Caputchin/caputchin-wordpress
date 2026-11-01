<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Tests\Assets;

use PHPUnit\Framework\TestCase;

/**
 * The widget bundle ships inside the plugin (WordPress.org does not allow
 * plugin JavaScript from a third-party CDN), so the default loader URL must
 * point at the vendored copy and every file the bundle loads at runtime must
 * sit next to it.
 */
final class VendoredWidgetTest extends TestCase {

	private const ROOT = __DIR__ . '/../..';

	public function test_default_widget_src_is_the_vendored_bundle(): void {
		$main = (string) file_get_contents( self::ROOT . '/caputchin.php' );
		$this->assertStringContainsString(
			"define( 'CAPUTCHIN_WIDGET_SRC', CAPUTCHIN_URL . 'assets/widget/widget.js' );",
			$main
		);
		$this->assertStringNotContainsString( 'cdn.jsdelivr.net', $main );
	}

	public function test_bundle_and_its_runtime_siblings_are_vendored(): void {
		foreach ( array( 'widget.js', 'cap_wasm_bg.wasm', 'pako_inflate.min.js', 'LICENSE', 'NOTICE', 'VERSION' ) as $file ) {
			$this->assertFileExists( self::ROOT . '/assets/widget/' . $file );
		}
		$version = trim( (string) file_get_contents( self::ROOT . '/assets/widget/VERSION' ) );
		$this->assertMatchesRegularExpression( '/^\d+\.\d+\.\d+$/', $version );
	}

	public function test_bundle_resolves_its_siblings_from_its_own_url(): void {
		// The IIFE build points cap.js at the wasm and pako files beside the
		// script's own URL; without this it falls back to jsDelivr.
		$bundle = (string) file_get_contents( self::ROOT . '/assets/widget/widget.js' );
		$this->assertStringContainsString( 'setCapAssetUrlsFrom(document.currentScript?.src)', $bundle );
	}

	public function test_distribution_keeps_the_bundle_and_drops_the_vendor_script(): void {
		$lines = array_map( 'trim', (array) file( self::ROOT . '/.distignore' ) );
		$this->assertContains( '/bin', $lines );
		foreach ( $lines as $line ) {
			$this->assertStringStartsNotWith( '/assets', $line );
		}
	}
}
