=== Caputchin ===
Contributors: caputchin
Tags: captcha, spam, bot, privacy, verification
Requires at least: 6.0
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 0.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Privacy-first, surveillance-free bot verification for WordPress forms. A friendly challenge for people, a wall for bots.

== Description ==

Caputchin protects your WordPress forms from spam and automated abuse with a verification challenge that is pleasant for real visitors and hard for bots. It does not track your visitors, set advertising cookies, or sell data.

The widget runs entirely on the visitor's page. When a visitor passes, your server confirms the result with Caputchin before the form is accepted, so a forged or replayed token never gets through.

Add protection to:

* The WordPress comment, login, registration, and lost-password forms
* Contact Form 7, WPForms, Elementor Pro Forms, Gravity Forms, and Fluent Forms
* Any page, using the included block or the `[caputchin]` shortcode

You need a free Caputchin site key and secret key from your Caputchin dashboard.

== Installation ==

1. Install and activate the plugin.
2. Open Settings, Caputchin in the WordPress admin.
3. Paste your public site key and your secret key.
4. Choose which forms to protect, then save.
5. Add the block or the `[caputchin]` shortcode to any other form you want to protect.

== Frequently Asked Questions ==

= Do I need a Caputchin account? =

Yes. Create one and generate a site key and secret key from the dashboard, then paste them into the plugin settings.

= Is my secret key safe? =

The secret key is stored on your server and is only used in the server-side verification call. It is never sent to the browser.

= Does Caputchin track my visitors? =

No. The plugin does not set tracking cookies and the verification service does not profile visitors.

== Changelog ==

= 0.1.0 =
* Initial release.
