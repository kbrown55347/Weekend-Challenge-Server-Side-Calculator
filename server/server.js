// Load express library from node_modules/express
const express = require('express');
// Create our 'app,' OUR SERVER:
const app = express();
const bodyParser = require('body-parser');
// This must be added before GET & POST routes
app.use(bodyParser.urlencoded({extended:true}));
// Tell express where to find our 'public' files
app.use(express.static('server/public'));

let history = [];
let numbers = [];
let listItems = [];
let answer;
let sign;

// Tell server to retrieve input info from client side
// using POST
app.post('/numbers', function(req, res) {
    // console.log("Numbers:", req.body);
    numbers.push(req.body);
    // console.log('in numbers array', numbers);
    res.sendStatus(201);
});

app.get('/answer', function(req, res) {
    calculate(numbers);
    bundleHistoryAndAnswer(numbers);
    // console.log('in numbers', numbers);
    createListItems(history);
    res.send(listItems);
    //console.log('in listItems', listItems);
});

// create function to add most recent calculation and answer 
// bundled in one object to history array
function bundleHistoryAndAnswer(array) {
    let lastItem = array[array.length-1];
    if (lastItem.operator === 'add-btn') {
        sign = '+';
    } else if (lastItem.operator === 'subtract-btn') {
        sign = '-';
    } else if (lastItem.operator === 'multiply-btn') {
        sign = 'x';
    } else if (lastItem.operator === 'divide-btn') {
        sign = '/';
    }
    let calculationAndAnswer = {
        firstNum: lastItem.firstNumber,
        operator: sign,
        secondNum: lastItem.secondNumber,
        answer: answer
    }
    history.push(calculationAndAnswer);
    // console.log('in calculationAndAnswer', calculationAndAnswer);
} // end bundleHistoryAndAnswer

function createListItems(array) {
    let lastItem = array[array.length-1];
        // create list item for each item in array
    let listItem = {
        listItem: `<li>${lastItem.firstNum} ${lastItem.operator} ${lastItem.secondNum} = ${lastItem.answer}</li>`,
        itemAnswer: lastItem.answer,
    };
    // push list item as object to history array
    listItems.push(listItem);
}// end createListItems

// Create function to do mathematical calculation
function calculate(array) {
    answer = 0;
    let lastItem = array[array.length-1];
    if (lastItem.operator === 'add-btn') {
        answer = Number(lastItem.firstNumber) + Number(lastItem.secondNumber);
    } else if (lastItem.operator === 'subtract-btn') {
        answer = Number(lastItem.firstNumber) - Number(lastItem.secondNumber);
    } else if (lastItem.operator === 'multiply-btn') {
        answer = Number(lastItem.firstNumber) * Number(lastItem.secondNumber);
    } else if (lastItem.operator === 'divide-btn') {
        answer = Number(lastItem.firstNumber) / Number(lastItem.secondNumber);
    }
    // console.log('in calculate, answer is:', answer);
} // end calculate


// Starts server and listens for requests:
app.listen(5000, function() {
    console.log('Your express server is running!');
});