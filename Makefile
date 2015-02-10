serve: build
	cd site && python -m SimpleHTTPServer

build:
	./data/generate ./data/collections collections > ./site/js/data.json
