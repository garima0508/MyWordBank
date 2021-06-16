//alert('Grrr.')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   const re = new RegExp('bear', 'gi')
//   const matches = document.documentElement.innerHTML.match(re)
//   sendResponse({count: matches.length})
// })

// const re = new RegExp("bear", "gi");
// const matches = document.documentElement.innerHTML.match(re) || [];

// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length,
// });
chrome.runtime.sendMessage({
  word: document.getElementsByClassName("RjReFf")[0].innerText,
  meaning: document.getElementsByClassName("h3TRxf")[0].innerText,
});
// chrome.storage.local.set({ url: count }, function () {
//   //  Data's been saved boys and girls, go on home
// });
