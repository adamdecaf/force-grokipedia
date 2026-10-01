# Privacy Policy for Force Grokipedia

Effective date: October 1, 2026

Force Grokipedia is a browser extension that redirects Wikipedia encyclopedia article pages to the matching page on [grokipedia.com](https://grokipedia.com). This policy describes how the extension handles user data.

The developer does not operate a backend for this extension and does not receive data from it.

## Information the extension handles

**On/off preference.** The extension stores a single local flag for whether redirects are enabled. It uses `chrome.storage.local` on your device. This value is not transmitted anywhere.

**Wikipedia URLs.** To perform its single purpose, the extension reads the URL of navigations to `wikipedia.org` and `*.wikipedia.org` (article paths such as `/wiki/…` and `/w/index.php?title=…`). It uses that URL only to build the corresponding Grokipedia URL and send the browser there. Wikipedia URLs are not logged, stored (other than the brief in-memory use needed to redirect), or sent to the developer.

The extension does not read Wikipedia page content, cookies, form fields, or account data. It does not run on sites other than wikipedia.org.

## How that information is used

The local on/off flag remembers your toolbar toggle.

Matched Wikipedia URLs are used only to redirect the current tab to `https://grokipedia.com/` or `https://grokipedia.com/page/…`.

## Sharing and third parties

The developer does not collect, sell, or share user data.

When a redirect happens, your browser makes a normal HTTPS request to grokipedia.com, the same as if you had typed that address. Grokipedia’s own site policies apply to that visit. The extension does not add tracking parameters or extra data to those requests.

The extension does not use analytics, advertising SDKs, remote code, or third-party servers.

## Limited use

This extension complies with the Chrome Web Store User Data Policy, including Limited Use. Data handled by the extension is used only to provide the disclosed single purpose (redirecting Wikipedia articles to Grokipedia). It is not used or transferred for advertising, credit, or other unrelated purposes, and is not sold.

## Retention and deletion

The on/off flag stays on your device until you change it or uninstall the extension. Uninstalling removes the extension’s local storage.

## Children

The extension is not directed at children and does not knowingly collect personal information from anyone.

## Changes

Updates to this policy will be posted in this file in the [Force Grokipedia repository](https://github.com/adamdecaf/force-grokipedia).

## Contact

Questions: open an issue at https://github.com/adamdecaf/force-grokipedia/issues
