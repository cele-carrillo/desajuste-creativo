.PHONY: all
all: build test

.PHONY: build
build:
	bundle exec jekyll build

.PHONY: test
test:
	bundle exec rake test

.PHONY: watch
watch:
	bundle exec jekyll serve --config _config.yml,_config_local.yml

.PHONY: watch-prod
watch-prod:
	bundle exec jekyll serve --config _config.yml,_config_prod.yml

.PHONY: watch-collab
watch-collab:
	bundle exec jekyll serve --config _config.yml,_config_local.yml --livereload -H 0.0.0.0
