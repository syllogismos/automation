console.log('This is the background page.');
console.log('Put the background scripts here.');


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log(message);
//     console.log(sender);
//     if (message === 'fill_stock_pick_form') {
//         console.log("opening the form");
//         chrome.tabs.create("https://tinyurl.com/mtpzcucb");
//         sendResponse("opened tab");
//     }
// });