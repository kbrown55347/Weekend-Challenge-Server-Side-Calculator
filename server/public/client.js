$(document).ready(onReady);

let operatorId;

function onReady() {
    displayAnswer();
    // Wire '=' button to run handleEquals
    $('#equals-btn').on('click', handleEquals);
    // Wire 'C' button to clear inputs
    $('#clear-btn').on('click', handleClearButton);
    $('.operator').on('click', handleOperator);
}

// Create function to find id of clicked operator button
function handleOperator() {
    operatorId = $(this).attr('id');
    // console.log(operatorId);
} // end handleOperator

// Create function to handle '=' click, bundle inputs and
// operator as object and use POST to send info to server
function handleEquals() {
    let numbersAndSign = {
    firstNumber: $('#first-num-input').val(),
    secondNumber: $('#second-num-input').val(),
    operator: operatorId    
    };
    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: numbersAndSign
    }).then(function(response) {
        console.log('numbers object sent', response);
    }).catch(function(error) {
        console.log('numbers object did NOT send', error);
    })
    displayAnswer();
} // end handleEquals

// Create function to GET answer and history from /answer
// route and display on DOM
function displayAnswer() {
    $.ajax({
        method: 'GET',
        url: '/answer',
    }).then(function(response) {
        $('#answer').empty();
        $('#answer').append(response[response.length-1].itemAnswer);
        $('#history-list').empty();
        for (let item of response) {
            $('#history-list').append(item.listItem);
        };
        // displayHistory(response);        
    }).catch(function(error) {
        console.log('GET number did NOT send', error);
    })
} // end displayAnswer

// Create function to clear input fields on click of 
// 'C' button
function handleClearButton() {
    $('#first-num-input').val('');
    $('#second-num-input').val('');
    // console.log('ALL CLEAR');
} // end handleClearButton