install:
	npm install
start:
	npx src/bin/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .