const assert = require("node:assert/strict");
const { toGrokipediaUrl } = require("./redirect.js");

const cases = [
  [
    "https://en.wikipedia.org/wiki/Albert_Einstein",
    "https://grokipedia.com/page/Albert_Einstein",
  ],
  [
    "https://en.m.wikipedia.org/wiki/Albert_Einstein",
    "https://grokipedia.com/page/Albert_Einstein",
  ],
  [
    "https://en.wikipedia.org/wiki/C%2B%2B",
    "https://grokipedia.com/page/C%2B%2B",
  ],
  [
    "https://en.wikipedia.org/wiki/Albert_Einstein?wprov=sfti1",
    "https://grokipedia.com/page/Albert_Einstein",
  ],
  [
    "https://en.wikipedia.org/w/index.php?title=Special_relativity",
    "https://grokipedia.com/page/Special_relativity",
  ],
  [
    "https://en.wikipedia.org/w/index.php?title=Albert_Einstein&action=history",
    "https://grokipedia.com/page/Albert_Einstein",
  ],
  ["https://en.wikipedia.org/", "https://grokipedia.com/"],
  ["https://en.wikipedia.org/wiki/Main_Page", "https://grokipedia.com/"],
  ["https://en.wikipedia.org/wiki/Special:Search", null],
  ["https://en.wikipedia.org/wiki/Wikipedia:Grokipedia", null],
  ["https://en.wikipedia.org/wiki/File:Example.jpg", null],
  ["https://en.wikipedia.org/wiki/Category:Physics", null],
  [
    "https://en.wikipedia.org/wiki/Star_Wars:_A_New_Hope",
    "https://grokipedia.com/page/Star_Wars:_A_New_Hope",
  ],
];

for (const [input, expected] of cases) {
  assert.equal(toGrokipediaUrl(input), expected, input);
}

console.log(`ok ${cases.length} cases`);
