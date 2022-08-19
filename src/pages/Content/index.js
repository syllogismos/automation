import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");


let url = document.location.href;

if (url === "https://www.cnbc.com/us-market-movers/") {
    console.log("This is the CNBC page");

    chrome.storage.sync.get("routine", ({ routine }) => {
        console.log(routine);
        if (routine === 'stock_pick') {
            setTimeout(clickNasdaq, 1000);
        }
    });
    chrome.storage.sync.set({ routine: "" });
}

function clickNasdaq() {
    let buttons = document.getElementsByClassName("MarketMoversMenu-marketOption");
    let nasdaqButton = buttons[1];
    console.log(nasdaqButton);
    nasdaqButton.click();
    setTimeout(readTable, 1000);

}

function readTable() {
    let tables = document.getElementsByClassName("MarketTop-topTable");
    var top_movers = tables[0];
    console.log(top_movers);
    var second_top_mover = top_movers.childNodes[0].childNodes[1];
    var name = second_top_mover.getElementsByClassName('MarketTop-name')[0].children[0].children[0].textContent;
    var percentage = second_top_mover.getElementsByClassName('MarketTop-quoteChange')[0].textContent;
    chrome.storage.sync.set({ 'stock_pick': { name, percentage } });
    // chrome.runtime.sendMessage('fill_stock_pick_form', (response) => {
    //     console.log(response);
    // });
    console.log(second_top_mover);
    console.log(name, percentage);
    console.log("nas nas nas nas nas nas");
    window.open("https://tinyurl.com/mtpzcucb");
}

if (url.startsWith("https://forms.zohopublic.in")) {
    console.log("This is the form page");

    chrome.storage.sync.get('stock_pick', ({ stock_pick }) => {
        if (stock_pick !== undefined) {
            console.log(stock_pick);
            let { name, percentage } = stock_pick;
            console.log(name);
            console.log(percentage);
            var name_input = document.getElementsByName("SingleLine")[0];
            var percentage_input = document.getElementsByName("SingleLine1")[0];
            var time_stamp_input = document.getElementsByName("SingleLine2")[0];
            name_input.value = name;
            percentage_input.value = percentage;
            time_stamp_input.value = Math.floor(Date.now() / 1000);
            chrome.storage.sync.set({ 'stock_pick': undefined });
        }
    });
}








