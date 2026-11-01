<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Tests\Assets;

use Brain\Monkey;
use Brain\Monkey\Functions;
use Caputchin\WP\Assets;
use PHPUnit\Framework\TestCase;

/**
 * The loader registers the configured bundle URL, versioned by the plugin.
 */
final class AssetsTest extends TestCase {

	protected function setUp(): void {
		parent::setUp();
		Monkey\setUp();
		if ( ! defined( 'CAPUTCHIN_VERSION' ) ) {
			define( 'CAPUTCHIN_VERSION', '9.9.9' );
		}
		if ( ! defined( 'CAPUTCHIN_URL' ) ) {
			define( 'CAPUTCHIN_URL', 'https://example.test/wp-content/plugins/caputchin/' );
		}
		if ( ! defined( 'CAPUTCHIN_WIDGET_SRC' ) ) {
			define( 'CAPUTCHIN_WIDGET_SRC', CAPUTCHIN_URL . 'assets/widget/widget.js' );
		}
	}

	protected function tearDown(): void {
		Monkey\tearDown();
		parent::tearDown();
	}

	public function test_registers_the_bundle_with_the_plugin_version(): void {
		Functions\when( 'wp_script_is' )->justReturn( false );
		Functions\when( 'wp_style_is' )->justReturn( true );
		Functions\expect( 'wp_register_script' )
			->once()
			->with( 'caputchin-widget', CAPUTCHIN_WIDGET_SRC, array(), CAPUTCHIN_VERSION, true );

		Assets::register_assets();
		$this->addToAssertionCount( 1 );
	}

	public function test_src_is_filterable(): void {
		Functions\when( 'apply_filters' )->alias(
			function ( $hook, $value ) {
				return 'caputchin_widget_src' === $hook ? 'https://self-hosted.test/widget.js' : $value;
			}
		);
		$this->assertSame( 'https://self-hosted.test/widget.js', Assets::src() );
	}
}
