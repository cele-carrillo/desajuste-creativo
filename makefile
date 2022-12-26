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
	bundle exec jekyll serve --drafts

.PHONY: watch-collab
watch-collab:
	bundle exec jekyll serve --drafts --livereload -H 0.0.0.0
