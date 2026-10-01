# Force Grokipedia

Brave / Chrome extension that redirects Wikipedia articles to the matching [Grokipedia](https://grokipedia.com) page.

```
https://en.wikipedia.org/wiki/Albert_Einstein
  → https://grokipedia.com/page/Albert_Einstein
```

Works on links you click from search, chat, or anywhere else. Pause it from the toolbar icon when you need Wikipedia itself.

This is an unpacked Manifest V3 extension. It is not on the Chrome Web Store.

## Install in Brave

1. Clone this repo:

   ```bash
   git clone https://github.com/adamdecaf/force-grokipedia.git
   ```

2. Open `brave://extensions`.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked**.
5. Select the `force-grokipedia` folder (the one that contains `manifest.json`).
6. Allow access to `wikipedia.org` if Brave asks.
7. Optional: pin the extension from the toolbar, and under **Details** enable **Allow in private**.

Chrome, Edge, and other Chromium browsers use the same steps (`chrome://extensions`, `edge://extensions`).

## What it redirects

| Wikipedia | Grokipedia |
| --- | --- |
| `/wiki/Article_Title` | `/page/Article_Title` |
| Mobile hosts (`en.m.wikipedia.org`, …) | same article slug |
| `/w/index.php?title=Article_Title` | `/page/Article_Title` |
| Homepage and `Main_Page` | `https://grokipedia.com/` |

Left alone: `Special:`, `Wikipedia:`, files, talk, user, help, template, category, and similar project namespaces, so login and search still work.

## Try it

With the extension loaded and the toggle on:

1. Open `https://en.wikipedia.org/wiki/Albert_Einstein`. You should land on `https://grokipedia.com/page/Albert_Einstein`.
2. Click a Wikipedia result from Google. Same redirect.
3. Click the toolbar icon and turn **Redirect Wikipedia articles** off. Reload a Wikipedia URL — it stays on Wikipedia.
4. Turn it back on.

After you change the code, click **Reload** on `brave://extensions`. Already-open Wikipedia tabs only redirect on a new navigation or refresh.

## Permissions

- `wikipedia.org` host access — required to rewrite article navigations
- `storage` — remembers the on/off toggle
- `declarativeNetRequestWithHostAccess` — redirects at the network layer before Wikipedia paints

A small `document_start` content script covers odd URL shapes the ruleset misses.

## Development

```bash
make test
make zip
```

`make zip` writes `force-grokipedia-<version>.zip` at the repo root, with extension files at the archive root (what the Chrome Web Store expects). It skips tests, `.git`, and Brave's unpacked `_metadata/`.

## Privacy

The extension stores only the local on/off toggle and does not send data to the developer. Full policy: [PRIVACY.md](PRIVACY.md).

## License

[MIT](LICENSE)
