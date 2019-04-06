chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // console.log("a request to start listending for click events");
  // console.info('contentscript', request, sender);
  //   console.log(sender.tab ?
  //     "from a content script:" + sender.tab.url :
  //     "from the extension");
    if (request.greeting == "hello") {
      sendResponse({farewell: "goodbye"});
      if (document.getElementsByClassName('checklist-progress-bar-current js-checklist-progress-bar').length) {
        checklistElem = document.getElementsByClassName('checklist-progress-bar-current js-checklist-progress-bar');
        checklistElem[0].style["background"] = 'linear-gradient(to right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)';
      }
    }
});


