// JS fn which launches on installation. Worth keeping for now.
chrome.runtime.onInstalled.addListener(() => {

})

// // background.js
// chrome.storage.local.get(["badgeText"], ({ badgeText }) => {
//     chrome.action.setBadgeText({ text: badgeText });
//   });
  
//   // Listener is registered on startup
//   chrome.action.onClicked.addListener(handleActionClick);