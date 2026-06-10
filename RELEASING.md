# Releasing

Versioning, the changelog, the distribution build, and the WordPress.org deploy all run from `.github/workflows/release.yml`. Nothing is built or pushed by hand.

## How a release happens

1. Commits land on `main` using Conventional Commits (`feat:`, `fix:`, and so on).
2. release-please keeps an open "release vX.Y.Z" pull request with the computed version bump, the `CHANGELOG.md` update, and the version synced into `caputchin.php` (the plugin header `Version:` and the `CAPUTCHIN_VERSION` constant) through the configured `extra-files`.
3. Merging that pull request creates the git tag and the GitHub Release.
4. The `package` job builds the distribution zip (dev files stripped via `.distignore`) and attaches it to the GitHub Release. That zip is what you upload for a WordPress.org review, so the submission artifact is always a CI build.
5. The `deploy` job publishes to the WordPress.org SVN. It is inert until the slug is approved (see below).

Configuration lives in `release-please-config.json` and `.release-please-manifest.json`. The workflow authenticates as a GitHub App via the `RELEASE_APP_ID` and `RELEASE_APP_PRIVATE_KEY` organization secrets.

## First submission to WordPress.org

The first publish is a one-time manual review, not an automated push:

1. Trigger a release (merge the release PR) and download the `caputchin.zip` attached to the GitHub Release. The same zip can be reproduced locally with the `.distignore` exclusions.
2. With a WordPress.org account, submit that zip at https://wordpress.org/plugins/developers/add/ for review.
3. The Plugin Review Team reviews manually (days to weeks). On approval you are granted commit access to the `caputchin` SVN repository. The slug is permanent.

Run the official `plugin-check` (WordPress.org's pre-submission linter) against the shipped fileset and keep it passing before each submission.

## Activating the automated deploy

Once the slug is approved, the `deploy` job pushes `trunk/`, `tags/<version>/`, and the `.wordpress-org/` listing assets (icon, banner, screenshots) to SVN on every release. To turn it on:

1. Add the `WPORG_SVN_USERNAME` and `WPORG_SVN_PASSWORD` repository secrets (the WordPress.org account credentials).
2. Set the `WPORG_PUBLISH` repository variable to `true`.

The deploy job syncs `readme.txt`'s `Stable tag` to the released version before pushing, so the served version always matches the tag without keeping a version marker in the readme header. Until both the variable and the secrets are set, every release still tags, builds, and attaches the zip, but skips the SVN push.
