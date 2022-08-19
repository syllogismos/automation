## Installation

1. clone the repository
2. run `npm install` and `npm run build`
3. In the `chrome://extensions/` enable the `Developer Mode` and click on the `Load unpacked` button and select the build folder.
4. After the extension loads, pin the extension to the toolbar. Click on the extension icon and click on `RUN` button in the popup.
5. It should open up the market watch page in a new tab, select the NASDAQ section, pick the second stock and open the webform in another tab fill all the relevant fields and submit the form.

## Notes.

1. I used `chrome.storage` to store data from various places so that content scripts can do relevant automation when they land on the respective pages.
2. When I clicked on run I store a key called `routine` with the value of `stock_pick` and open the market watch page in a new tab.
3. In the content script if I the url matches market watch page, I check for the `routine` key and if its set to `stock_pick` I do the automation of selecting the NASDAQ tab, and picking the second stock. I store this stock data in `chrome.storage` so that I can use it again in content script of the form page.
4. Again to fill the form and submit, in the content script for the form page, I check for the stored stock data and if that object exists, I fill the form and submit the form, and empty the chrome.storage object.

## Issues.

1. I'm not happy with how the content script gets the stock data. I simply used `setTimeout` function to wait for the relevant component to load after button click. And theres no guarantee that the component will load in the time specified after the button is clicked.
2. I tried lots of things, like using `document_idle`, `document_end` in the manifest file for `content_scripts`. But I dont think these settings are relevant for single page apps built on react and etc. We cant guarantee a certain component loads as expected.
3. Even after I click on nasdaq section, I have to wait a little bit to get the expected stock data. I might still get the s&p data if the nasdaq data is loading.
4. Its much better to do this task using the apis market watch uses to get this data, instead of click on the webpage and browsing. That way we can guarantee we are getting the data we expected.
5. The dom navigation I did also seemed a bit hacky, I don't know what the norm is when it comes to dom navigation, maybe using some npm packages. I just used `document.getElementBy***` functions to access the buttons, data and fields I was interested in.

## Improvements.

1. I need to make the code more modular so that I can compose multiple actions in a task. Say here, I just have two steps. What if I have multiple steps in a certain automation task.
2. How to I track and handle failures in steps.
