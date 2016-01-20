.PHONY: build watch sleep-build

build: ./node_modules
	@mkdir -p site/js/
	./node_modules/.bin/browserify -t [ babelify --presets [ react ] ] src/index.js -o site/js/app.js
	
sleep-build: build
	@echo hanging around until we die
	sleep 999

watch: ./node_modules
	./node_modules/.bin/supervisor --watch src/ --exec make sleep-build

./node_modules:
	npm install .
