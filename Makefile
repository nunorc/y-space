
build: build.py templates/*html static/* content/pages/*md
	@python build.py
	@cp -a static build/

clean:
	@rm -rf build

