<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Tests\Widget;

use Brain\Monkey;
use Brain\Monkey\Functions;
use Caputchin\WP\Widget\GameMarkup;
use PHPUnit\Framework\TestCase;

/**
 * Layout allowlist + no-verify gating + the no-sitekey guard for the game host.
 */
final class GameMarkupTest extends TestCase {

	protected function setUp(): void {
		parent::setUp();
		Monkey\setUp();
		Functions\when( 'esc_attr' )->returnArg( 1 );
		Functions\when( 'esc_url' )->returnArg( 1 );
	}

	protected function tearDown(): void {
		Monkey\tearDown();
		parent::tearDown();
	}

	/**
	 * @param array<string,mixed> $settings Stored caputchin_settings.
	 */
	private function with_settings( array $settings ): void {
		Functions\when( 'get_option' )->justReturn( $settings );
	}

	public function test_no_sitekey_returns_empty(): void {
		$this->with_settings( array() );
		$this->assertSame( '', GameMarkup::render( array( 'game' => '@org/bubble' ) ) );
	}

	public function test_renders_sitekey_game_and_valid_layout(): void {
		$this->with_settings( array( 'sitekey' => 'cpt_pub_x' ) );
		$html = GameMarkup::render(
			array(
				'game'   => '@org/bubble',
				'layout' => 'modal',
			)
		);
		$this->assertStringContainsString( '<caputchin-game sitekey="cpt_pub_x"', $html );
		$this->assertStringContainsString( 'game="@org/bubble"', $html );
		$this->assertStringContainsString( 'layout="modal"', $html );
	}

	public function test_invalid_layout_is_omitted(): void {
		$this->with_settings( array( 'sitekey' => 'cpt_pub_x' ) );
		$html = GameMarkup::render(
			array(
				'game'   => '@org/bubble',
				'layout' => 'sidebar',
			)
		);
		$this->assertStringNotContainsString( 'layout=', $html );
	}

	public function test_no_verify_emitted_only_when_truthy(): void {
		$this->with_settings( array( 'sitekey' => 'cpt_pub_x' ) );

		$on = GameMarkup::render(
			array(
				'game'      => '@org/bubble',
				'no-verify' => true,
			)
		);
		$this->assertStringContainsString( ' no-verify', $on );

		$off = GameMarkup::render(
			array(
				'game'      => '@org/bubble',
				'no-verify' => false,
			)
		);
		$this->assertStringNotContainsString( 'no-verify', $off );
	}

	public function test_uses_configured_default_game_when_placement_sets_none(): void {
		$this->with_settings(
			array(
				'sitekey' => 'cpt_pub_x',
				'game'    => array(
					'game'   => 'caputchin/games/x',
					'layout' => 'inline',
				),
			)
		);
		$html = GameMarkup::render( array() );
		$this->assertStringContainsString( 'game="caputchin/games/x"', $html );
		$this->assertStringContainsString( 'layout="inline"', $html );
	}

	public function test_placement_game_overrides_configured_default(): void {
		$this->with_settings(
			array(
				'sitekey' => 'cpt_pub_x',
				'game'    => array(
					'game'   => 'caputchin/games/fallback',
					'layout' => 'inline',
				),
			)
		);
		$html = GameMarkup::render( array( 'game' => '@org/explicit' ) );
		$this->assertStringContainsString( 'game="@org/explicit"', $html );
		$this->assertStringNotContainsString( 'caputchin/games/fallback', $html );
	}
}
