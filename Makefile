install:
	npm install
start:
	npx node bin/brain-even.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .