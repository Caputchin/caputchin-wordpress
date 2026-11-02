<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Tests\Admin;

use Brain\Monkey;
use Brain\Monkey\Functions;
use Caputchin\WP\Admin\SettingsPage;
use PHPUnit\Framework\TestCase;

/**
 * The settings page's links to caputchin.com carry the sign-up attribution
 * labels (ADR-0107): the dashboard link is tagged ref=wp-plugin, the
 * marketplace link only the UTM pair, and the docs links stay untagged.
 */
final class SettingsPageTest extends TestCase {

	protected function setUp(): void {
		parent::setUp();
		Monkey\setUp();
		Functions\stubTranslationFunctions();
		Functions\when( 'esc_attr' )->returnArg( 1 );
		Functions\when( 'esc_html' )->returnArg( 1 );
		// WordPress's esc_url encodes & as &#038; in display context.
		Functions\when( 'esc_url' )->alias(
			function ( $url ) {
				return str_replace( '&', '&#038;', $url );
			}
		);
		Functions\when( 'current_user_can' )->justReturn( true );
		Functions\when( 'get_option' )->justReturn( array() );
		Functions\when( 'admin_url' )->alias(
			function ( $path ) {
				return 'https://example.test/wp-admin/' . $path;
			}
		);
		Functions\when( 'settings_fields' )->justReturn( null );
		Functions\when( 'selected' )->justReturn( '' );
		Functions\when( 'checked' )->justReturn( '' );
		Functions\when( 'submit_button' )->justReturn( null );
	}

	protected function tearDown(): void {
		Monkey\tearDown();
		parent::tearDown();
	}

	private function render(): string {
		ob_start();
		( new SettingsPage() )->render();
		return (string) ob_get_clean();
	}

	public function test_dashboard_link_carries_ref_and_utm(): void {
		$this->assertStringContainsString(
			'href="https://caputchin.com/app?ref=wp-plugin&#038;utm_source=wordpress-org&#038;utm_medium=referral"',
			$this->render()
		);
	}

	public function test_marketplace_link_carries_utm_without_ref(): void {
		$this->assertStringContainsString(
			'href="https://caputchin.com/marketplace?utm_source=wordpress-org&#038;utm_medium=referral"',
			$this->render()
		);
	}

	public function test_only_the_dashboard_link_carries_ref_and_docs_links_are_untagged(): void {
		$html = $this->render();
		$this->assertSame( 1, substr_count( $html, 'ref=wp-plugin' ) );
		$this->assertStringContainsString( 'href="https://docs.caputchin.com/en"', $html );
		$this->assertStringContainsString( 'href="https://docs.caputchin.com/en/site-keys/overview"', $html );
		$this->assertStringContainsString( 'href="https://docs.caputchin.com/en/site-keys/games"', $html );
		$this->assertDoesNotMatchRegularExpression( '/docs\.caputchin\.com[^"]*\?/', $html );
	}
}
