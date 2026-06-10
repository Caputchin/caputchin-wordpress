<?php
/**
 * @package Caputchin\WP
 */

namespace Caputchin\WP\Admin;

use Caputchin\WP\Options;

defined( 'ABSPATH' ) || exit;

/**
 * The Settings, Caputchin admin page. Built on the WordPress Settings API so
 * the nonce and the manage_options capability check are handled by options.php.
 *
 * The page is tabbed (Keys, Appearance, Protected forms, Game). Every tab's
 * fields render inside one form so a single save persists the whole option;
 * the inactive tabs are only hidden, never dropped, so saving one tab does not
 * reset another. The active tab is preserved across save by the referer that
 * settings_fields() emits.
 */
final class SettingsPage {

	private const GROUP = 'caputchin';
	private const SLUG  = 'caputchin';

	public function hooks(): void {
		add_action( 'admin_menu', array( $this, 'add_page' ) );
		add_action( 'admin_init', array( $this, 'register' ) );
		add_filter( 'plugin_action_links_' . plugin_basename( CAPUTCHIN_FILE ), array( $this, 'action_links' ) );
	}

	public function add_page(): void {
		add_options_page(
			__( 'Caputchin', 'caputchin' ),
			__( 'Caputchin', 'caputchin' ),
			'manage_options',
			self::SLUG,
			array( $this, 'render' )
		);
	}

	/**
	 * Add a Settings link to the plugin's row on the Plugins screen.
	 *
	 * @param string[] $links Existing action links.
	 * @return string[]
	 */
	public function action_links( $links ): array {
		$settings = sprintf(
			'<a href="%s">%s</a>',
			esc_url( admin_url( 'options-general.php?page=' . self::SLUG ) ),
			esc_html__( 'Settings', 'caputchin' )
		);
		array_unshift( $links, $settings );
		return $links;
	}

	public function register(): void {
		register_setting(
			self::GROUP,
			Options::OPTION_KEY,
			array(
				'type'              => 'array',
				'sanitize_callback' => array( SettingsFields::class, 'sanitize' ),
				'default'           => Options::defaults(),
			)
		);
	}

	/**
	 * Human-readable labels for the integration toggles.
	 *
	 * @return array<string,string>
	 */
	private static function integration_labels(): array {
		return array(
			'wp_comment'       => __( 'Comment form', 'caputchin' ),
			'wp_login'         => __( 'Login form', 'caputchin' ),
			'wp_register'      => __( 'Registration form', 'caputchin' ),
			'wp_lost_password' => __( 'Lost password form', 'caputchin' ),
			'cf7'              => __( 'Contact Form 7', 'caputchin' ),
			'wpforms'          => __( 'WPForms', 'caputchin' ),
			'fluent_forms'     => __( 'Fluent Forms', 'caputchin' ),
		);
	}

	/**
	 * Inline style that hides a tab panel unless it is the active one.
	 *
	 * @param string $tab    This panel's tab slug.
	 * @param string $active The active tab slug.
	 * @return string Empty when active, else a display:none style attribute.
	 */
	private static function panel_attr( string $tab, string $active ): string {
		return $tab === $active ? '' : ' style="display:none"';
	}

	public function render(): void {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$opts       = Options::all();
		$appearance = $opts['appearance'];
		$game       = $opts['game'];
		$has_secret = '' !== (string) $opts['secret'];

		$tabs = array(
			'keys'       => __( 'Keys', 'caputchin' ),
			'appearance' => __( 'Appearance', 'caputchin' ),
			'forms'      => __( 'Protected forms', 'caputchin' ),
			'game'       => __( 'Game', 'caputchin' ),
		);
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- read-only tab selector; no state change.
		$active = isset( $_GET['tab'] ) ? sanitize_key( wp_unslash( $_GET['tab'] ) ) : 'keys';
		if ( ! isset( $tabs[ $active ] ) ) {
			$active = 'keys';
		}

		$name = Options::OPTION_KEY;
		?>
		<div class="wrap">
			<h1><?php echo esc_html__( 'Caputchin', 'caputchin' ); ?></h1>
			<p><?php echo esc_html__( 'Add the Caputchin verification widget to your forms. Paste your keys, choose which forms to protect, then save.', 'caputchin' ); ?></p>
			<h2 class="nav-tab-wrapper">
				<?php foreach ( $tabs as $slug => $label ) : ?>
					<a href="<?php echo esc_url( admin_url( 'options-general.php?page=' . self::SLUG . '&tab=' . $slug ) ); ?>" class="nav-tab <?php echo esc_attr( $active === $slug ? 'nav-tab-active' : '' ); ?>"><?php echo esc_html( $label ); ?></a>
				<?php endforeach; ?>
			</h2>
			<form method="post" action="options.php">
				<?php settings_fields( self::GROUP ); ?>

				<div class="caputchin-tab-panel"<?php echo self::panel_attr( 'keys', $active ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static literal attribute. ?>>
					<table class="form-table" role="presentation">
						<tr>
							<th scope="row"><label for="caputchin-sitekey"><?php echo esc_html__( 'Site key', 'caputchin' ); ?></label></th>
							<td>
								<input type="text" id="caputchin-sitekey" class="regular-text" autocomplete="off"
									name="<?php echo esc_attr( $name ); ?>[sitekey]"
									value="<?php echo esc_attr( $opts['sitekey'] ); ?>">
								<p class="description"><?php echo esc_html__( 'Your public site key, starting with cpt_pub_.', 'caputchin' ); ?></p>
							</td>
						</tr>
						<tr>
							<th scope="row"><label for="caputchin-secret"><?php echo esc_html__( 'Secret key', 'caputchin' ); ?></label></th>
							<td>
								<input type="password" id="caputchin-secret" class="regular-text" autocomplete="off" value=""
									name="<?php echo esc_attr( $name ); ?>[secret]"
									placeholder="<?php echo esc_attr( $has_secret ? __( 'A secret key is saved. Leave blank to keep it.', 'caputchin' ) : 'cpt_sec_...' ); ?>">
								<p class="description"><?php echo esc_html__( 'Your secret key, starting with cpt_sec_. Stored on your server, never sent to the browser. Leave blank to keep the saved key.', 'caputchin' ); ?></p>
							</td>
						</tr>
					</table>
				</div>

				<div class="caputchin-tab-panel"<?php echo self::panel_attr( 'appearance', $active ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static literal attribute. ?>>
					<table class="form-table" role="presentation">
						<tr>
							<th scope="row"><label for="caputchin-skin"><?php echo esc_html__( 'Theme', 'caputchin' ); ?></label></th>
							<td>
								<select id="caputchin-skin" name="<?php echo esc_attr( $name ); ?>[appearance][skin]">
									<option value="auto" <?php selected( $appearance['skin'], 'auto' ); ?>><?php echo esc_html__( 'Auto (match the visitor system)', 'caputchin' ); ?></option>
									<option value="light" <?php selected( $appearance['skin'], 'light' ); ?>><?php echo esc_html__( 'Light', 'caputchin' ); ?></option>
									<option value="dark" <?php selected( $appearance['skin'], 'dark' ); ?>><?php echo esc_html__( 'Dark', 'caputchin' ); ?></option>
								</select>
							</td>
						</tr>
						<tr>
							<th scope="row"><label for="caputchin-size"><?php echo esc_html__( 'Size', 'caputchin' ); ?></label></th>
							<td>
								<select id="caputchin-size" name="<?php echo esc_attr( $name ); ?>[appearance][size]">
									<option value="normal" <?php selected( $appearance['size'], 'normal' ); ?>><?php echo esc_html__( 'Normal', 'caputchin' ); ?></option>
									<option value="compact" <?php selected( $appearance['size'], 'compact' ); ?>><?php echo esc_html__( 'Compact', 'caputchin' ); ?></option>
								</select>
							</td>
						</tr>
						<tr>
							<th scope="row"><label for="caputchin-trigger"><?php echo esc_html__( 'Trigger', 'caputchin' ); ?></label></th>
							<td>
								<select id="caputchin-trigger" name="<?php echo esc_attr( $name ); ?>[appearance][trigger]">
									<option value="auto" <?php selected( $appearance['trigger'], 'auto' ); ?>><?php echo esc_html__( 'Auto (verify on load)', 'caputchin' ); ?></option>
									<option value="click" <?php selected( $appearance['trigger'], 'click' ); ?>><?php echo esc_html__( 'On click', 'caputchin' ); ?></option>
									<option value="form-submit" <?php selected( $appearance['trigger'], 'form-submit' ); ?>><?php echo esc_html__( 'On form submit', 'caputchin' ); ?></option>
									<option value="manual" <?php selected( $appearance['trigger'], 'manual' ); ?>><?php echo esc_html__( 'Manual', 'caputchin' ); ?></option>
								</select>
								<p class="description"><?php echo esc_html__( 'When verification runs. Auto suits most placements; On form submit gates a form until the visitor passes.', 'caputchin' ); ?></p>
							</td>
						</tr>
						<tr>
							<th scope="row"><label for="caputchin-locale"><?php echo esc_html__( 'Language', 'caputchin' ); ?></label></th>
							<td>
								<input type="text" id="caputchin-locale" class="regular-text" autocomplete="off"
									name="<?php echo esc_attr( $name ); ?>[appearance][locale]"
									value="<?php echo esc_attr( $appearance['locale'] ); ?>">
								<p class="description"><?php echo esc_html__( 'Leave blank to match the visitor browser. Or set a code such as en or ar.', 'caputchin' ); ?></p>
							</td>
						</tr>
						<tr>
							<th scope="row"><?php echo esc_html__( 'Invisible', 'caputchin' ); ?></th>
							<td>
								<label>
									<input type="checkbox" value="1"
										name="<?php echo esc_attr( $name ); ?>[appearance][invisible]"
										<?php checked( ! empty( $appearance['invisible'] ) ); ?>>
									<?php echo esc_html__( 'Run verification with no visible checkbox.', 'caputchin' ); ?>
								</label>
							</td>
						</tr>
					</table>
				</div>

				<div class="caputchin-tab-panel"<?php echo self::panel_attr( 'forms', $active ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static literal attribute. ?>>
					<table class="form-table" role="presentation">
						<?php foreach ( self::integration_labels() as $id => $label ) : ?>
							<tr>
								<th scope="row"><?php echo esc_html( $label ); ?></th>
								<td>
									<label>
										<input type="checkbox" value="1"
											name="<?php echo esc_attr( $name ); ?>[integrations][<?php echo esc_attr( $id ); ?>]"
											<?php checked( ! empty( $opts['integrations'][ $id ] ) ); ?>>
										<?php echo esc_html__( 'Protect this form', 'caputchin' ); ?>
									</label>
								</td>
							</tr>
						<?php endforeach; ?>
					</table>
				</div>

				<div class="caputchin-tab-panel"<?php echo self::panel_attr( 'game', $active ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static literal attribute. ?>>
					<p class="description"><?php echo esc_html__( 'Defaults for the [caputchin-game] shortcode and the Caputchin Game block. Each placement can override them.', 'caputchin' ); ?></p>
					<table class="form-table" role="presentation">
						<tr>
							<th scope="row"><label for="caputchin-game-id"><?php echo esc_html__( 'Default game', 'caputchin' ); ?></label></th>
							<td>
								<input type="text" id="caputchin-game-id" class="regular-text" autocomplete="off"
									name="<?php echo esc_attr( $name ); ?>[game][game]"
									value="<?php echo esc_attr( $game['game'] ); ?>">
								<p class="description"><?php echo esc_html__( 'A marketplace game id, such as caputchin/games/leaf-memory. Leave blank to choose the game on each placement.', 'caputchin' ); ?></p>
							</td>
						</tr>
						<tr>
							<th scope="row"><label for="caputchin-game-layout"><?php echo esc_html__( 'Default layout', 'caputchin' ); ?></label></th>
							<td>
								<select id="caputchin-game-layout" name="<?php echo esc_attr( $name ); ?>[game][layout]">
									<option value="auto" <?php selected( $game['layout'], 'auto' ); ?>><?php echo esc_html__( 'Auto (the game decides)', 'caputchin' ); ?></option>
									<option value="inline" <?php selected( $game['layout'], 'inline' ); ?>><?php echo esc_html__( 'Inline', 'caputchin' ); ?></option>
									<option value="modal" <?php selected( $game['layout'], 'modal' ); ?>><?php echo esc_html__( 'Modal', 'caputchin' ); ?></option>
									<option value="fullscreen" <?php selected( $game['layout'], 'fullscreen' ); ?>><?php echo esc_html__( 'Fullscreen', 'caputchin' ); ?></option>
								</select>
							</td>
						</tr>
					</table>
				</div>

				<?php submit_button(); ?>
			</form>
		</div>
		<?php
	}
}
