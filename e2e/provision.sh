#!/usr/bin/env bash
# Idempotent provisioning for the local Caputchin WordPress test environment.
# Run on demand:  docker compose run --rm wpcli
#
# Safe to re-run: every step checks state first.

set -euo pipefail
cd /var/www/html

echo "Waiting for WordPress core files..."
for _ in $(seq 1 30); do
	[ -f /var/www/html/wp-load.php ] && break
	sleep 2
done

echo "Waiting for the database..."
for _ in $(seq 1 30); do
	wp db check >/dev/null 2>&1 && break
	sleep 2
done

if ! wp core is-installed >/dev/null 2>&1; then
	echo "Installing WordPress..."
	wp core install \
		--url="http://localhost:8080" \
		--title="Caputchin Live Test" \
		--admin_user="admin" \
		--admin_password="admin" \
		--admin_email="admin@example.com" \
		--skip-email
fi

wp plugin is-active caputchin >/dev/null 2>&1 || wp plugin activate caputchin

if ! wp plugin is-active contact-form-7 >/dev/null 2>&1; then
	echo "Installing Contact Form 7..."
	wp plugin install contact-form-7 --activate
fi

if [ -n "${CPT_PUB:-}" ] && [ -n "${CPT_SEC:-}" ]; then
	wp option update caputchin_settings --format=json "{\"sitekey\":\"${CPT_PUB}\",\"secret\":\"${CPT_SEC}\",\"appearance\":{\"skin\":\"auto\",\"size\":\"normal\",\"locale\":\"\",\"invisible\":false},\"integrations\":{\"wp_comment\":true,\"wp_login\":true,\"wp_register\":true,\"wp_lost_password\":true,\"cf7\":true,\"wpforms\":true,\"elementor_pro\":true,\"gravity_forms\":true,\"fluent_forms\":true}}"
	echo "Saved caputchin_settings with the provided keys."
else
	echo "WARNING: CPT_PUB / CPT_SEC are not set. The widget cannot verify without a site key."
	echo "         Mint a dev site key (see README.md), export CPT_PUB and CPT_SEC, then re-run."
fi

# Test post. The [caputchin] shortcode renders the widget in the post body
# (theme-independent). The comment form, where the theme renders one, also
# exercises the WPComment adapter. Content is refreshed on every run.
caputchin_post_content='Add the Caputchin widget to any page or post with the shortcode:

<pre><code>[[caputchin]]</code></pre>

It renders the live widget:

[caputchin]'
caputchin_post_id="$(wp post list --post_type=post --post_status=publish --name=caputchin-live-test --field=ID)"
if [ -n "$caputchin_post_id" ]; then
	echo "Updating the test post..."
	wp post update "$caputchin_post_id" --post_content="$caputchin_post_content" --comment_status=open
else
	echo "Creating the test post..."
	wp post create --post_type=post --post_status=publish --post_title="Caputchin Live Test" --post_name=caputchin-live-test --post_content="$caputchin_post_content" --comment_status=open
fi

# Let logged-out comments post without manual approval so the live test gets a
# clear accepted-vs-blocked signal.
wp option update comment_moderation 0
wp option update comment_previously_approved 0
wp option update require_name_email 1

# Pretty permalinks so the /caputchin-*-test/ URLs resolve to the right page.
wp rewrite structure '/%postname%/' --hard
wp rewrite flush --hard

# Game-challenge demo page: [caputchin-game] renders the <caputchin-game> host,
# which verifies the same way the widget does. Content refreshed on every run.
caputchin_game_content='Game challenge below, placed with the shortcode:

<pre><code>[[caputchin-game game="caputchin/games/leaf-memory" layout="inline"]]</code></pre>

[caputchin-game game="caputchin/games/leaf-memory" layout="inline"]'
caputchin_game_id="$(wp post list --post_type=page --post_status=publish --name=caputchin-game-test --field=ID)"
if [ -n "$caputchin_game_id" ]; then
	wp post update "$caputchin_game_id" --post_content="$caputchin_game_content"
else
	wp post create --post_type=page --post_status=publish --post_title="Caputchin Game Test" --post_name=caputchin-game-test --post_content="$caputchin_game_content"
fi

echo
echo "Provisioning complete."
echo "Widget post:   http://localhost:8080/caputchin-live-test/"
echo "Game page:     http://localhost:8080/caputchin-game-test/"
echo "Admin:         http://localhost:8080/wp-admin/ (admin / admin)"
echo "Plugin set up: Settings, Caputchin"
