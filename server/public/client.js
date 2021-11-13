$(document).ready(onReady);

function onReady() {
    // Wire '=' button to run handleEquals
    $('#equals-btn').on('click', handleEquals);
    // Wire 'C' button to clear inputs
    $('#clear-btn').on('click', handleClearButton);
}

// Create function to handle '=' click, bundle inputs
// as object and use POST to send info to server
function handleEquals() {
    let numbers = {
    firstNumber: $('#first-num-input').val(),
    secondNumber: $('#second-num-input').val(),
    };
    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: numbers
    }).then(function(response) {
        console.log('numbers object sent', response);
    }).catch(function(error) {
        console.log('numbers object did NOT send', error);
    })
} // end handleEquals

// Create function to clear input fields on click of 
// 'C' button
function handleClearButton() {
    $('#first-num-input').val('');
    $('#second-num-input').val('');
    // console.log('ALL CLEAR');
} // handleClearButton