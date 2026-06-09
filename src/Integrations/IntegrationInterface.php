<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Integrations;

defined( 'ABSPATH' ) || exit;

/**
 * One adapter per form surface. An adapter renders the widget on its form and
 * verifies the token at that form's server-side validation point.
 */
interface IntegrationInterface {

	/**
	 * Stable id, matching the option key used to enable or disable this surface.
	 */
	public static function id(): string;

	/**
	 * Whether the host plugin or WordPress feature this adapter targets is
	 * present on the site.
	 */
	public static function is_active(): bool;

	/**
	 * Register the render and validation hooks. Implementations must no-op when
	 * the integration is disabled.
	 */
	public function hooks(): void;
}
