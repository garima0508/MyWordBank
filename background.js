// window.meanings = {};
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.meanings[request.word] = request.meaning;
// });

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({ url: "popup.html" });
// });

// window.meanings = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // if (localStorage.getItem("meanings") === null) {
  //   localStorage.setItem("meanings", {});
  // }
  var meanings = JSON.parse(localStorage.getItem("meanings") || "[]");
  // var old_data = {};
  // if (localStorage.getItem("meanings") !== null) {
  //   old_data = JSON.parse(localStorage.getItem("meanings"));
  // }
  var meaning = { word: request.word, meaning: request.meaning };
  if (!meanings.some((key) => key.word === meaning.word)) {
    meanings.push(meaning);
    console.log("Added" + meaning);
    localStorage.setItem("meanings", JSON.stringify(meanings));
  }
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "popup.html" });
});
