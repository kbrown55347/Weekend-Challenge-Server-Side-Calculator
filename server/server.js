// Load express library from node_modules/express
const express = require('express');
// Create our 'app,' OUR SERVER:
const app = express()
// Tell express where to find our 'public' files
app.use(express.static('./server/public'));









// Starts server and listens for requests:
app.listen(5000, function() {
    console.log('Your express server is running!');
});