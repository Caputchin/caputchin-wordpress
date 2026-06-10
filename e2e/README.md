# Local test environment

Runs a real WordPress at `http://localhost:8080` with the Caputchin plugin active, so you can exercise the widget end to end on a real site.

By default the widget loads from the published bundle and submissions are verified against the hosted Caputchin service, so all you need is a site key.

## Prerequisites

- Docker and Docker Compose.
- A Caputchin site key and secret key from your dashboard (public `cpt_pub_...` and secret `cpt_sec_...`).
- The origin `http://localhost:8080` added to that site key's allowed origins in your dashboard, so the widget is authorized to run there.

## Run

```bash
export CPT_PUB=cpt_pub_...
export CPT_SEC=cpt_sec_...

docker compose up -d
docker compose run --rm wpcli   # installs and configures WordPress, the plugin, Contact Form 7, and a test post
```

Then open `http://localhost:8080/caputchin-live-test/` and submit a comment. Completing the widget lets the comment through; submitting without it is rejected. The WordPress admin is at `http://localhost:8080/wp-admin/` (`admin` / `admin`), and the plugin settings are under Settings, Caputchin.

## Pointing at a different widget build or endpoint

Set `CAPUTCHIN_WIDGET_SRC` and `CAPUTCHIN_VERIFY_URL` in the environment to override the widget loader URL and the server-side verification endpoint. A `docker-compose.override.yml` in this directory is merged automatically and is a convenient place to set them (for example, a maintainer running against a local stack).

## Teardown

```bash
docker compose down -v
```
