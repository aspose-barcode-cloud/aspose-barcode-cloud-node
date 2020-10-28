.PHONY: all
all: format cover

.PHONY: format
format:
	./scripts/docs_format.sh
	npm run format

.PHONY: build
build:
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

.PHONY: check_git
check_git:
	git fetch origin
	git diff origin/master --exit-code

.PHONY: ci
ci:
	npm ci

.PHONY: publish
publish: format update_modules check_git test
	npm login
	npm publish ; npm logout
