// var realPushState = history.pushState;
// history.pushState = function() {
//   if (document.getElementsByClassName('checklist-progress-bar-current js-checklist-progress-bar').length) {
//     checklistElem = document.getElementsByClassName('checklist-progress-bar-current js-checklist-progress-bar')
//     checklistElem[0].style["background"] = 'linear-gradient(to right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)';
//   }
//
//   return realPushState.apply(history, arguments); // leave this line exactly as-is.
// };

  // console.log(chrome.tabs);
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
// });

console.log('hello');
console.log(window.location.pathname);

