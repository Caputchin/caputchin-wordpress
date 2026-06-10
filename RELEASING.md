# Releasing

Versioning and the changelog are driven by release-please from Conventional Commits.

## How a release happens

1. Commits land on `main` using Conventional Commits (`feat:`, `fix:`, and so on).
2. release-please (see `.github/workflows/release.yml`) keeps an open "release vX.Y.Z" pull request with the computed version bump, the `CHANGELOG.md` update, and the version synced into `caputchin.php` (the plugin header `Version:` and the `CAPUTCHIN_VERSION` constant) through the configured `extra-files`.
3. Merging that pull request creates the git tag and the GitHub Release, with notes generated from the commits.

Configuration lives in `release-please-config.json` and `.release-please-manifest.json`. The workflow authenticates as a GitHub App via the `RELEASE_APP_ID` and `RELEASE_APP_PRIVATE_KEY` organization secrets.

## WordPress.org publishing (not yet wired)

Publishing to the WordPress.org SVN is a separate step that is not enabled yet. It needs:

* A WordPress.org account with commit rights to an approved plugin slug (granted after a one-time plugin review; the slug is irreversible).
* The `WPORG_SVN_USERNAME` and `WPORG_SVN_PASSWORD` repository secrets.
* A deploy job gated on the release tag (which also syncs the `readme.txt` `Stable tag` to the released version).

Until that lands, a release produces the git tag, the GitHub Release, and the changelog, but does not publish to WordPress.org.
