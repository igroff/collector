.PHONY: build watch clean
SHELL=/usr/bin/env bash
# the paths to all the coffee files under the app/ dir
appcoffee := $(shell bash -c "shopt -s globstar ; echo app/**/*.coffee")

serve: build 
	cd built && exec python -m SimpleHTTPServer

built/vendor.js: vendor/*.js built
	cat vendor/*.js > ./built/vendor.js

built/app.js: $(appcoffee) built
	./node_modules/.bin/coffee --compile --bare --map --print $^ > ./built/app.js

built/data.js: built data/collections/*
	./data/generate ./data/collections collections > ./built/data.js

built:
	mkdir -p built

built/index.html: site/index.html
	cp site/* built/

build: built/app.js built/vendor.js built/data.js built/index.html

watch:
	./node_modules/.bin/supervisor -w site,app,vendor -e html,css,coffee,js --exec /usr/bin/make -- serve

clean:
	rm -rf built/
