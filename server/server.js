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
let answer;


// Tell server to retrieve input info from client side
// using POST
app.post('/numbers', function(req, res) {
    // console.log("Numbers:", req.body);
    answer = calculate(req.body)
    numbers.push(req.body);
    // console.log('in numbers array', numbers);
    res.sendStatus(201);
});

// create function to add history and answer to history
// array
function addHistory(array) {
    let lastItem = array[array.length-1];
        let calculationAndAnswer = {
            firstNum: lastItem.firstNumber,
            operation: lastItem.operator,
            secondNum: lastItem.secondNumber,
            answer: answer,
        }
    history.push(calculationAndAnswer);
    // console.log('in addHistory', history);
}

app.get('/answer', function(req, res) {
    addHistory(numbers);
    res.send(history);
});


// Create function to do mathematical calculation
function calculate(object) {
    answer = 0;
    if (object.operator === 'add-btn') {
        answer = Number(object.firstNumber) + Number(object.secondNumber);
    } else if (object.operator === 'subtract-btn') {
        answer = Number(object.firstNumber) - Number(object.secondNumber);
    } else if (object.operator === 'multiply-btn') {
        answer = Number(object.firstNumber) * Number(object.secondNumber);
    } else if (object.operator === 'divide-btn') {
        answer = Number(object.firstNumber) / Number(object.secondNumber);
    }
    return answer;
} // end calculate


// Starts server and listens for requests:
app.listen(5000, function() {
    console.log('Your express server is running!');
});