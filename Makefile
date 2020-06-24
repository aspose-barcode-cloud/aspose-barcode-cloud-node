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

.PHONY: update_packages
update_packages:
	npm update
	npm outdated

.PHONY: check_git
check_git:
	git fetch origin
	git diff origin/master --exit-code

.PHONY: clean
clean:
	npm run clear

.PHONY: publish
publish: clean format update_packages check_git test
	npm publish
