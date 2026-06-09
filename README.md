# Caputchin for WordPress

Privacy-first, surveillance-free bot verification for WordPress forms. This plugin adds the Caputchin widget to your forms and verifies each submission on your server before it is accepted.

User-facing documentation lives in [`readme.txt`](readme.txt) (the WordPress.org plugin readme). This file is for people working on the plugin.

## What it does

- Renders the Caputchin widget on a form, which injects a single-use token when the visitor passes.
- On submit, the server posts that token to the Caputchin verification endpoint with the site secret and accepts the form only when verification succeeds. Verification is fail-closed: anything other than an explicit success is rejected.

## Coverage

- WordPress core comment, login, registration, and lost-password forms.
- Contact Form 7, WPForms, Elementor Pro Forms, Gravity Forms, Fluent Forms.
- A block and a `[caputchin]` shortcode for anywhere else.

## Layout

```
caputchin.php          Plugin header, constants, autoloader, bootstrap
src/                   Namespaced source (Caputchin\WP)
  Verify/              The verification core (Verifier, VerifyResult, ErrorMessages)
  Admin/               Settings page
  Frontend/            Block + shortcode
  Integrations/        One adapter per supported form
test/                  Dockerized WordPress for local end-to-end testing
```

## Local development

The runtime has no Composer dependency (a small PSR-4 autoloader ships in `caputchin.php`). Composer is dev-only, for coding standards and tests:

```
composer install
composer lint     # phpcs (WordPress Coding Standards)
composer test     # phpunit
```

A full local environment that runs the widget end-to-end against a local verification backend is in [`test/`](test/) (Docker). See `test/README.md`.

## License

GPL-2.0-or-later. See [`LICENSE`](LICENSE).
