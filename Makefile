
build: build.py templates/*html static/*
	@mkdir -p docs
	@python build.py
	@cp -a static/* docs/

clean:
	@rm -rf docs/

