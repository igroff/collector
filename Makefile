.PHONY: build watch

build:
	./node_modules/.bin/browserify -t [ babelify --presets [ react ] ] src/main.js -o site/js/app.js
	
watch:
	./node_modules/.bin/babel --presets react src --watch --out-file site/js/app.js
