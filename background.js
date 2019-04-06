chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.sendMessage(integer tabId, any message, object options, function responseCallback)
});