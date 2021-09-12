
build: build.py templates/*html static/*
	@python build.py
	@cp -a static docs/

clean:
	@rm -rf build

