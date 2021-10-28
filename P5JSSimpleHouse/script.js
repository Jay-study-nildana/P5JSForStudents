//setInterval(function, delay)

//remember - this is basic javascript
//variables are shared across all other js files in the project like
//sketch.js
let numberOfSeconds = 10000;
var initialX = 100;
var initialY = 110;
setInterval(DoSomethingRandom, numberOfSeconds);

//this is related to the Bonsai Tree

const plantBorder = 50;
const nodeBorder = 10;
const minBranchLength = 10;
const maxBranchLength = 25;
const minSizeMultiplier = .75;

let plant;
let plantX;
let plantY;

//this is related to the text
var defaultQuote = "That's what she said";
var defaultQuoteAuthor = "Micheal Scott";

function DoSomethingRandom() {
    if (LoggingIsAllowed == true) {
        console.log("Something Random Just Happened");
    }

    let increment = 5;
    initialX = initialX + increment;
    initialY = initialY + increment;
    //use this if you want pull data from an API server
    BasicFetchCall();
}

function BasicFetchCall() {

    //show that we are loading a quote
    defaultQuote = "Quote is being loaded...";
    defaultQuoteAuthor = "...";

    redraw();

    let BaseURL = 'https://localhost:5001';
    let EndPoint = '/api/UserNotLoggedIn/GetHoldOfthem';
    // let QuoteURL = 'https://localhost:5001/api/UserNotLoggedIn/GetHoldOfthem';
    let QuoteURL = BaseURL + EndPoint;
    if (LoggingIsAllowed == true) {
        console.log(QuoteURL);
    }

    fetch(QuoteURL, {
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(response => response.json())
        .then(data => DoSomeThingWithAPIData(data));
    //.then(data => console.log(data));
}

function DoSomeThingWithAPIData(data) {

    if (LoggingIsAllowed == true) {
        console.log("Inside DoSomeThingWithAPIData");
        console.log("Value of X : " + initialX);
        console.log(data);
    }

    initialX = parseInt(data.quoteIdentifierCompadre);

    defaultQuote = data.quoteContent;
    defaultQuoteAuthor = data.quoteAuthor;
    redraw();
}

//saving a screenshot
function SaveScreenShot() {
    saveCanvas();
}

function mouseClicked() {
    if (ClickToSaveScreenShot == true) {
        SaveScreenShot();
    }
}




























