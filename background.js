window.meanings = {};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.meanings[request.word] = request.meaning;
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "popup.html" });
});
