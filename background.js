const RULESET_ID = "wikipedia_to_grokipedia";

async function applyEnabled(enabled) {
  if (enabled) {
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: [RULESET_ID],
    });
  } else {
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: [RULESET_ID],
    });
  }

  await chrome.action.setBadgeText({ text: enabled ? "" : "OFF" });
  await chrome.action.setBadgeBackgroundColor({ color: "#4a4a4a" });
  await chrome.action.setTitle({
    title: enabled ? "Force Grokipedia (on)" : "Force Grokipedia (off)",
  });
}

async function syncFromStorage() {
  const { enabled } = await chrome.storage.local.get({ enabled: true });
  await applyEnabled(enabled);
}

chrome.runtime.onInstalled.addListener(syncFromStorage);
chrome.runtime.onStartup.addListener(syncFromStorage);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && Object.prototype.hasOwnProperty.call(changes, "enabled")) {
    applyEnabled(Boolean(changes.enabled.newValue));
  }
});
