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

	public function render(): void {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$opts       = Options::all();
		$appearance = $opts['appearance'];
		$has_secret = '' !== (string) $opts['secret'];
		?>
		<div class="wrap">
			<h1><?php echo esc_html__( 'Caputchin', 'caputchin' ); ?></h1>
			<p><?php echo esc_html__( 'Add the Caputchin verification widget to your forms. Paste your keys, choose which forms to protect, then save.', 'caputchin' ); ?></p>
			<form method="post" action="options.php">
				<?php settings_fields( self::GROUP ); ?>

				<h2><?php echo esc_html__( 'Keys', 'caputchin' ); ?></h2>
				<table class="form-table" role="presentation">
					<tr>
						<th scope="row"><label for="caputchin-sitekey"><?php echo esc_html__( 'Site key', 'caputchin' ); ?></label></th>
						<td>
							<input type="text" id="caputchin-sitekey" class="regular-text" autocomplete="off"
								name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[sitekey]"
								value="<?php echo esc_attr( $opts['sitekey'] ); ?>">
							<p class="description"><?php echo esc_html__( 'Your public site key, starting with cpt_pub_.', 'caputchin' ); ?></p>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="caputchin-secret"><?php echo esc_html__( 'Secret key', 'caputchin' ); ?></label></th>
						<td>
							<input type="password" id="caputchin-secret" class="regular-text" autocomplete="off" value=""
								name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[secret]"
								placeholder="<?php echo esc_attr( $has_secret ? __( 'A secret key is saved. Leave blank to keep it.', 'caputchin' ) : 'cpt_sec_...' ); ?>">
							<p class="description"><?php echo esc_html__( 'Your secret key, starting with cpt_sec_. Stored on your server, never sent to the browser. Leave blank to keep the saved key.', 'caputchin' ); ?></p>
						</td>
					</tr>
				</table>

				<h2><?php echo esc_html__( 'Appearance', 'caputchin' ); ?></h2>
				<table class="form-table" role="presentation">
					<tr>
						<th scope="row"><label for="caputchin-skin"><?php echo esc_html__( 'Theme', 'caputchin' ); ?></label></th>
						<td>
							<select id="caputchin-skin" name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[appearance][skin]">
								<option value="auto" <?php selected( $appearance['skin'], 'auto' ); ?>><?php echo esc_html__( 'Auto (match the visitor system)', 'caputchin' ); ?></option>
								<option value="light" <?php selected( $appearance['skin'], 'light' ); ?>><?php echo esc_html__( 'Light', 'caputchin' ); ?></option>
								<option value="dark" <?php selected( $appearance['skin'], 'dark' ); ?>><?php echo esc_html__( 'Dark', 'caputchin' ); ?></option>
							</select>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="caputchin-size"><?php echo esc_html__( 'Size', 'caputchin' ); ?></label></th>
						<td>
							<select id="caputchin-size" name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[appearance][size]">
								<option value="normal" <?php selected( $appearance['size'], 'normal' ); ?>><?php echo esc_html__( 'Normal', 'caputchin' ); ?></option>
								<option value="compact" <?php selected( $appearance['size'], 'compact' ); ?>><?php echo esc_html__( 'Compact', 'caputchin' ); ?></option>
							</select>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="caputchin-trigger"><?php echo esc_html__( 'Trigger', 'caputchin' ); ?></label></th>
						<td>
							<select id="caputchin-trigger" name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[appearance][trigger]">
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
								name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[appearance][locale]"
								value="<?php echo esc_attr( $appearance['locale'] ); ?>">
							<p class="description"><?php echo esc_html__( 'Leave blank to match the visitor browser. Or set a code such as en or ar.', 'caputchin' ); ?></p>
						</td>
					</tr>
					<tr>
						<th scope="row"><?php echo esc_html__( 'Invisible', 'caputchin' ); ?></th>
						<td>
							<label>
								<input type="checkbox" value="1"
									name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[appearance][invisible]"
									<?php checked( ! empty( $appearance['invisible'] ) ); ?>>
								<?php echo esc_html__( 'Run verification with no visible checkbox.', 'caputchin' ); ?>
							</label>
						</td>
					</tr>
				</table>

				<h2><?php echo esc_html__( 'Protected forms', 'caputchin' ); ?></h2>
				<table class="form-table" role="presentation">
					<?php foreach ( self::integration_labels() as $id => $label ) : ?>
						<tr>
							<th scope="row"><?php echo esc_html( $label ); ?></th>
							<td>
								<label>
									<input type="checkbox" value="1"
										name="<?php echo esc_attr( Options::OPTION_KEY ); ?>[integrations][<?php echo esc_attr( $id ); ?>]"
										<?php checked( ! empty( $opts['integrations'][ $id ] ) ); ?>>
									<?php echo esc_html__( 'Protect this form', 'caputchin' ); ?>
								</label>
							</td>
						</tr>
					<?php endforeach; ?>
				</table>

				<?php submit_button(); ?>
			</form>
		</div>
		<?php
	}
}
