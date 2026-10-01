VERSION := $(shell node -p "require('./manifest.json').version")
ZIP := force-grokipedia-$(VERSION).zip

# Store payload only. Keep .git, tests, and Brave's unpacked _metadata out.
FILES := \
	manifest.json \
	background.js \
	redirect.js \
	rules.json \
	popup.html \
	popup.css \
	popup.js \
	LICENSE \
	icons

.PHONY: zip test clean

zip: $(ZIP)

$(ZIP): $(FILES) icons/icon16.png icons/icon48.png icons/icon128.png
	rm -f $(ZIP)
	zip -r -X $(ZIP) $(FILES) -x "*.DS_Store"

test:
	node test-redirect.js

clean:
	rm -f force-grokipedia-*.zip
