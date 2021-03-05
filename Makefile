.PHONY: all
all: clean ci update_modules format lint cover

.PHONY: init
init:
	npm install

.PHONY: format
format:
	./scripts/docs_format.sh
	npm run format

.PHONY: clean
clean:
	rm -rf built dist node_modules || true

.PHONY: build
build:
	npm run prepare

.PHONY: test
test: build
	npm test
	./scripts/run_example.sh

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
	npm outdated
	npm install --package-lock-only

.PHONY: check_git
check_git:
	git fetch --depth 1 origin
	git diff origin/master --exit-code

.PHONY: ci
ci:
	npm ci || true

.PHONY: publish
publish: clean ci test check_git
	npm publish
