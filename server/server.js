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



// Tell server to retrieve input info from client side
// using POST
app.post('/numbers', function(req, res) {
    console.log("Numbers:", req.body);
    calculate(req.body);
    // history.push(req.body);
    // console.log(history);
    res.sendStatus(201);
});

// Starts server and listens for requests:
app.listen(5000, function() {
    console.log('Your express server is running!');
});

// Create function to do mathematical calculation
function calculate(object) {
    let answer = 0;
    if (object.operator === 'add-btn') {
        answer = Number(object.firstNumber) + Number(object.secondNumber);
    } else if (object.operator === 'subtract-btn') {
        answer = Number(object.firstNumber) - Number(object.secondNumber);
    } else if (object.operator === 'multiply-btn') {
        answer = Number(object.firstNumber) * Number(object.secondNumber);
    } else if (object.operator === 'divide-btn') {
        answer = Number(object.firstNumber) / Number(object.secondNumber);
    }
    console.log(answer);
} // end calculate