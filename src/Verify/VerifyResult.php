<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Verify;

defined( 'ABSPATH' ) || exit;

/**
 * Immutable outcome of a verification attempt.
 */
final class VerifyResult {

	/**
	 * @var bool
	 */
	private $ok;

	/**
	 * @var string[]
	 */
	private $error_codes;

	/**
	 * @var bool
	 */
	private $transport_error;

	/**
	 * @param bool     $ok              Whether verification passed.
	 * @param string[] $error_codes     Error code strings from the response.
	 * @param bool     $transport_error Whether the failure was a transport error.
	 */
	private function __construct( bool $ok, array $error_codes, bool $transport_error ) {
		$this->ok              = $ok;
		$this->error_codes     = $error_codes;
		$this->transport_error = $transport_error;
	}

	public static function success(): self {
		return new self( true, array(), false );
	}

	/**
	 * @param string[] $error_codes Error code strings from the response.
	 */
	public static function failure( array $error_codes ): self {
		return new self( false, $error_codes, false );
	}

	public static function transport( string $code ): self {
		return new self( false, array( $code ), true );
	}

	public function ok(): bool {
		return $this->ok;
	}

	/**
	 * @return string[]
	 */
	public function error_codes(): array {
		return $this->error_codes;
	}

	public function transport_error(): bool {
		return $this->transport_error;
	}

	public function first_code(): string {
		return isset( $this->error_codes[0] ) ? $this->error_codes[0] : 'unknown-error';
	}
}
