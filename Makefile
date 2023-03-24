.PHONY: all
all: init lint build cover

.PHONY: github-ci
github-ci: init lint test

.PHONY: init
init:
	-npm clean-install

.PHONY: format
format:
	./scripts/docs_format.sh
	npm run format

.PHONY: lock
lock:
	npm install --package-lock-only

.PHONY: clean
clean:
	-rm -rf built dist node_modules coverage

.PHONY: build
build:
	npm run prepare

.PHONY: npm-test
npm-test:
	npm test

.PHONY: test
test: npm-test example

.PHONY: cover
cover:
	npm run cover

.PHONY: lint
lint:
	npm run lint

.PHONY: update
update:
	npm run check-updates
	npm update
	npm outdated || true
	npm install --package-lock-only

.PHONY: check-git
check-git:
	git fetch --depth 1 origin
	git diff origin/main --exit-code

.PHONY: publish
publish: clean init test check-git
	npm publish

.PHONY: publish-docker
publish-docker: init test
	npm publish

.PHONY: example
example:
	./scripts/extract_js_from_README.sh > "example.js"
	./scripts/run_example.sh
