chrome.webNavigation.onHistoryStateUpdated.addListener(function(tabs) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs.length) {
      if (tabs[0].url.includes("trello.com/c")) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function (response) {
          if (response !== null) {
            console.log(response);
          }
        });
      }
    }
  });
});
