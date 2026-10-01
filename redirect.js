const SKIP_NAMESPACES = new Set(
  [
    "Special",
    "File",
    "Image",
    "Wikipedia",
    "Help",
    "User",
    "Talk",
    "Template",
    "Module",
    "MediaWiki",
    "Draft",
    "Portal",
    "Category",
    "Media",
    "TimedText",
    "WP",
    "WT",
    "Project",
    "File_talk",
    "Image_talk",
    "Wikipedia_talk",
    "Help_talk",
    "User_talk",
    "Template_talk",
    "Module_talk",
    "MediaWiki_talk",
    "Draft_talk",
    "Portal_talk",
    "Category_talk",
    "TimedText_talk",
    "Project_talk",
  ].map((name) => name.toLowerCase())
);

function toGrokipediaUrl(href) {
  let url;
  try {
    url = new URL(href);
  } catch {
    return null;
  }

  if (!/(^|\.)wikipedia\.org$/i.test(url.hostname)) {
    return null;
  }

  let title = null;
  const wikiMatch = url.pathname.match(/^\/wiki\/(.+)$/);
  if (wikiMatch) {
    title = decodeURIComponent(wikiMatch[1].replace(/\+/g, " "));
  } else if (url.pathname === "/w/index.php" && url.searchParams.has("title")) {
    title = url.searchParams.get("title");
  } else if (url.pathname === "/" || url.pathname === "") {
    return "https://grokipedia.com/";
  } else {
    return null;
  }

  title = title.replace(/\/+$/, "").replace(/ /g, "_");
  if (!title || /^Main_Page$/i.test(title)) {
    return "https://grokipedia.com/";
  }

  const colon = title.indexOf(":");
  if (colon > 0) {
    const namespace = title.slice(0, colon).toLowerCase();
    if (SKIP_NAMESPACES.has(namespace)) {
      return null;
    }
  }

  const encoded = encodeURIComponent(title)
    .replace(/%2F/gi, "/")
    .replace(/%3A/gi, ":");
  return `https://grokipedia.com/page/${encoded}`;
}

function maybeRedirect() {
  if (typeof window === "undefined" || typeof chrome === "undefined" || !chrome.storage) {
    return;
  }

  const dest = toGrokipediaUrl(window.location.href);
  if (!dest) {
    return;
  }

  chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
    if (enabled) {
      window.location.replace(dest);
    }
  });
}

maybeRedirect();

if (typeof module !== "undefined" && module.exports) {
  module.exports = { toGrokipediaUrl };
}
