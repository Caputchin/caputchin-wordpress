<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP;

defined( 'ABSPATH' ) || exit;

/**
 * Typed read and write access over the single plugin option row.
 *
 * The secret key lives here and is only ever read on the server. It is never
 * passed to the browser, enqueued, localized, or echoed into markup.
 */
final class Options {

	public const OPTION_KEY = 'caputchin_settings';

	/**
	 * The known integration ids and their default enabled state.
	 *
	 * @return array<string,bool>
	 */
	public static function integration_ids(): array {
		return array(
			'wp_comment'       => true,
			'wp_login'         => true,
			'wp_register'      => true,
			'wp_lost_password' => true,
			'cf7'              => true,
			'wpforms'          => true,
			'fluent_forms'     => true,
		);
	}

	/**
	 * @return array<string,mixed>
	 */
	public static function defaults(): array {
		return array(
			'sitekey'      => '',
			'secret'       => '',
			'appearance'   => array(
				'skin'      => 'auto',
				'size'      => 'normal',
				'locale'    => '',
				'invisible' => false,
				'trigger'   => 'auto',
			),
			'integrations' => self::integration_ids(),
		);
	}

	/**
	 * @return array<string,mixed>
	 */
	public static function all(): array {
		$stored = get_option( self::OPTION_KEY, array() );
		if ( ! is_array( $stored ) ) {
			$stored = array();
		}
		return self::merge( self::defaults(), $stored );
	}

	public static function sitekey(): string {
		return (string) self::all()['sitekey'];
	}

	public static function secret(): string {
		return (string) self::all()['secret'];
	}

	/**
	 * @return array<string,mixed>
	 */
	public static function appearance(): array {
		return (array) self::all()['appearance'];
	}

	public static function is_integration_enabled( string $id ): bool {
		$integrations = self::all()['integrations'];
		return ! empty( $integrations[ $id ] );
	}

	/**
	 * @param array<string,mixed> $clean Already sanitized settings array.
	 */
	public static function update( array $clean ): void {
		update_option( self::OPTION_KEY, $clean );
	}

	/**
	 * Recursive defaults merge so a stored partial array keeps default keys.
	 *
	 * @param array<string,mixed> $defaults Default values.
	 * @param array<string,mixed> $stored   Stored values.
	 * @return array<string,mixed>
	 */
	private static function merge( array $defaults, array $stored ): array {
		$out = $defaults;
		foreach ( $stored as $key => $value ) {
			if ( isset( $defaults[ $key ] ) && is_array( $defaults[ $key ] ) && is_array( $value ) ) {
				$out[ $key ] = self::merge( $defaults[ $key ], $value );
			} else {
				$out[ $key ] = $value;
			}
		}
		return $out;
	}
}
