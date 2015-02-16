.PHONY: build
SHELL=/usr/bin/env bash
# the paths to all the coffee files under the app/ dir
appcoffee := $(shell bash -c "shopt -s globstar ; echo app/**/*.coffee")

serve: build 
	cd site && python -m SimpleHTTPServer

site/vendor.js: vendor/*.js
	cat vendor/*.js > ./site/vendor.js

site/app.js: $(appcoffee)
	./node_modules/.bin/coffee --compile --bare --map --print $^ > ./site/app.js

build: site/app.js site/vendor.js
	./data/generate ./data/collections collections > ./site/js/data.js
