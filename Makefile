install:
	npm install
start:
	npx node src/bin/brain-nod.js
publish:
	npm publish --dry-run
lint:
	npx eslint .