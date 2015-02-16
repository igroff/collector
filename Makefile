SHELL=/usr/bin/env bash
.SHELLOPTS=-O globstar
appcoffee := $(shell bash -c "shopt -s globstar ; echo app/**/*.coffee")

serve: build site/app.js site/vendor.js
	cd site && python -m SimpleHTTPServer

site/vendor.js: vendor/*.js
	cat vendor/*.js > ./site/vendor.js

site/app.js: $(appcoffee)
	./node_modules/.bin/coffee --compile --map --print app/**/*.coffee > ./site/app.js

build:
	./data/generate ./data/collections collections > ./site/js/data.js
