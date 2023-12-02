document.addEventListener('DOMContentLoaded', () => {
  const injectButton = document.getElementById('inject-button');

  injectButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'injectCheatMenu' });
    });
  });
});
