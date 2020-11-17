.PHONY: all
all: update_modules format cover

.PHONY: format
format:
	./scripts/docs_format.sh
	npm run format

.PHONY: clean
clean:
	npm run clean

.PHONY: build
build: clean
	npm run build

.PHONY: test
test: build
	npm test

.PHONY: cover
cover:
	npm run cover

.PHONY: lint
lint:
	npm run lint

.PHONY: update_modules
update_modules:
	npm run check-updates
	npm update
	npm outdated
	npm install --package-lock-only

.PHONY: check_git
check_git:
	git fetch --depth 1 origin
	# git diff origin/master --exit-code

.PHONY: ci
ci:
	npm ci

.PHONY: publish
publish: format check_git test
	npm publish
