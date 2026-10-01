const enabledInput = document.getElementById("enabled");
const status = document.getElementById("status");

function render(enabled) {
  enabledInput.checked = enabled;
  status.textContent = enabled
    ? "Redirecting Wikipedia → Grokipedia"
    : "Redirects paused";
}

chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
  render(Boolean(enabled));
});

enabledInput.addEventListener("change", () => {
  const enabled = enabledInput.checked;
  chrome.storage.local.set({ enabled });
  render(enabled);
});
