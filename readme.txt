=== Caputchin ===
Contributors: caputchin
Tags: captcha, spam, bot, privacy, gdpr
Requires at least: 6.0
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 0.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Privacy-first, surveillance-free bot protection for WordPress forms. A friendly challenge for people, a wall for bots.

== Description ==

Caputchin keeps spam and automated abuse off your WordPress forms with a verification step that is pleasant for real visitors and expensive for bots. It does not track your visitors, set advertising cookies, fingerprint devices, or sell data.

How it works: the Caputchin widget runs on the visitor's page and produces a single-use token when the visitor passes. When the form is submitted, your site confirms that token with Caputchin before the submission is accepted. Verification is fail-closed, so a missing, forged, expired, or replayed token is always rejected. Your secret key stays on your server and is never sent to the browser.

= What it protects =

* The WordPress comment form
* The login, registration, and lost-password forms
* Contact Form 7, WPForms, and Fluent Forms
* Any page or post: the Caputchin block or the `[caputchin]` shortcode for the checkbox widget, or the Caputchin Game block or the `[caputchin-game]` shortcode for a game challenge

= Privacy =

Caputchin is built to pass a privacy review. It does not store form submissions, does not set tracking cookies, and does not profile the people who fill in your forms. If your site has to answer to GDPR or similar rules, Caputchin is designed to be one less thing to explain.

= What you need =

A Caputchin account with a site key and a secret key, both created in your Caputchin dashboard. Paste them into the plugin settings and choose which forms to protect.

== Installation ==

1. Upload the plugin to `wp-content/plugins/caputchin`, or install it from the Plugins screen, then activate it.
2. Open Settings, Caputchin in the WordPress admin.
3. Paste your public site key and your secret key.
4. Choose which forms to protect and set the default widget appearance, then save.
5. To place the widget anywhere else, add the Caputchin block in the editor, or use the `[caputchin]` shortcode in any content.

== Frequently Asked Questions ==

= Do I need a Caputchin account? =

Yes. Create one, then generate a site key and a secret key in the dashboard and paste both into the plugin settings.

= Is my secret key safe? =

Yes. The secret key is stored on your server and is only used in the server-to-server verification call. It is never enqueued, printed in the page, or sent to the browser.

= Does Caputchin track my visitors? =

No. The plugin sets no tracking cookies, and the verification service does not fingerprint or profile the people who complete the challenge.

= Will it lock me out of my own login? =

No. The login check applies only to the standard login form, and it only blocks a sign-in when the verification is missing or invalid. Application passwords, XML-RPC, and REST sign-ins are left untouched.

= What happens when verification fails? =

The submission is rejected with a clear message and the visitor can try again. Caputchin never lets a submission through on a failed or missing check.

= Does it work with my theme? =

Yes. The widget is a self-contained element that renders inside your forms and content regardless of the active theme.

= Can I put the widget on a custom form? =

Yes. Use the Caputchin block or the `[caputchin]` shortcode to place the widget, then verify the submitted token on your server.

= Which form plugins are supported? =

This release protects the WordPress core forms, Contact Form 7, WPForms, and Fluent Forms.

= Can I use a game instead of the checkbox? =

Yes. The `[caputchin-game]` shortcode and the Caputchin Game block place a game challenge instead of the checkbox. It verifies the same way: a passing game injects the token your server confirms.

== External services ==

This plugin connects to the Caputchin verification service, which provides the verification itself. It only works with a Caputchin account and the keys you enter in the plugin settings.

* **Caputchin verification service** (`verify.caputchin.com`), run by Praxa Lab.
    * In the visitor's browser, on pages that show the widget: the widget sends your public site key to load that key's widget configuration, requests a challenge and sends back the solved challenge (or the result of a game) to receive a single-use token. When a game is configured, it also asks the service which game bundle to load.
    * The browser connects to the service directly, so the service receives the connection's IP address and the browser's user agent, as with any web request. The Caputchin privacy policy describes what is kept.
    * Only when verification reuse with a stored clearance is turned on for your site key (or its troop) in Caputchin (off by default), the widget stores a short-lived first-party cookie (`__cptr`, SameSite=Strict, lifetime set by your reuse window) so a returning visitor can skip a new challenge. It is sent back to the service with the next challenge request.
    * From your server, when a protected form is submitted: the plugin sends the token from the submission and your secret key, and receives whether the token is valid.
    * Terms of service: https://caputchin.com/legal/terms
    * Privacy policy: https://caputchin.com/legal/privacy
* **jsDelivr** (`cdn.jsdelivr.net`), used only when a game challenge is configured. The game bundle chosen by the Caputchin service is loaded from jsDelivr, pinned to a fixed release or commit where one can be resolved, and always checked against an integrity hash, inside a sandboxed frame. The browser requests the file like any other web resource.
    * Terms of service: https://www.jsdelivr.com/terms
    * Privacy policy: https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net

The widget script itself ships inside this plugin and is served by your site.

== Source code ==

The widget bundle in `assets/widget/` is the published `@caputchin/widget` package, copied unchanged with `bin/vendor-widget.sh`. Its version is in `assets/widget/VERSION`.

* Widget source and build: https://github.com/Caputchin/caputchin-sdk/tree/widget-v3.6.0/packages/widget (the tag matching `assets/widget/VERSION`)
* Plugin source: https://github.com/Caputchin/caputchin-wordpress
* The bundle includes Cap (https://github.com/tiagozip/cap) and pako (https://github.com/nodeca/pako). See `assets/widget/NOTICE` for their licenses.

== Screenshots ==

1. The settings page: keys, appearance, protected forms, and game defaults, organized into tabs.
2. The checkbox widget placed in content with the `[caputchin]` shortcode.
3. The game challenge placed with the `[caputchin-game]` shortcode.
4. The widget protecting the WordPress login form.
5. The widget protecting a Contact Form 7 form.

== Changelog ==

= 0.1.0 =
* Initial release. Protects the WordPress comment, login, registration, and lost-password forms, plus Contact Form 7, WPForms, and Fluent Forms. Includes blocks and shortcodes for the checkbox widget (`[caputchin]`) and a game challenge (`[caputchin-game]`), and a tabbed settings page. Verification runs server-side and fails closed.

== Upgrade Notice ==

= 0.1.0 =
First release.
