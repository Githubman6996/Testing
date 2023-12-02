// Inject cheat menu into the Blooket game page
function injectCheatMenu() {
  // Your cheat menu implementation goes here
  // ...
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'injectCheatMenu') {
    injectCheatMenu();
  }
});

// Send a message to the background script to request injecting the cheat menu
chrome.runtime.sendMessage({ action: 'requestInjectCheatMenu' });
