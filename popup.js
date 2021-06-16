document.addEventListener(
  "DOMContentLoaded",
  function () {
    const bg = chrome.extension.getBackgroundPage();
    Object.keys(bg.meanings).forEach(function (word) {
      const div = document.createElement("div");
      div.textContent = `${word} : ${bg.meanings[word]}`;
      // chrome.storage.sync.set({ url: bg.meanings[word] }, function () {
      //   //  Data's been saved boys and girls, go on home
      //   alert("Success");
      // });

      document.body.appendChild(div);
    });

    // document.querySelector('button').addEventListener('click', onclick, false)
    //
    // function onclick () {
    //   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    //   })
    // }
    //
    // function setCount (res) {
    //   const div = document.createElement('div')
    //   div.textContent = `${res.count} bears`
    //   document.body.appendChild(div)
    // }
  },
  false
);
