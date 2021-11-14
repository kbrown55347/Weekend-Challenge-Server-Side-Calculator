# Weekend Challenge: Server Side Calculator

Welcome to the weekend challenge!

You are going to be building a server-side calculator. The logic for the calculator **must** be implemented on the server. 

## Required Features

### Calculator

Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.

Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.

### History

Keep a historical record of all math operations and solutions on the server. Display a list of all previous calculations on the page when it loads using a GET request. Update the list when a new calculation is made.

> NOTE: History should exist even after refreshing the page. It's expected that the history will go away after restarting the server. We'll talk about long term data storage next week.

---
![base mode interface](images/baseMode.png)
---

> Note: Do not use eval() to complete this assignment.

## Stretch Goals

- Convert the interface to look and behave like a calculator as shown below.

  *Interfaces that mirror real world objects are often more intuitive and self-explanatory for users.*

---
![calculator interface](images/stretchGoal_interface.gif)
---

- Only allow the POST call to happen if all necessary input is ready.

  *Data integrity is superfluously important! Sometimes users hit the "go button" without fully inputting the needed fields. Show an alert if they left something empty and don't send bad or incomplete data to the server.*

- Allow a user to clear the history by clicking on a button. Technically this shouldn't be a GET or a POST. Look into making a DELETE request!

  *GETs are used to, well, get information from the server. POSTs are used to send new info to the server. DELETEs are used for, you guessed it, deleting info already on the server.*

- Allow a user to click on an entry in the History list to re-run that calculation. This should display the answer on the calculator interface like a normal calculation.

  *Anticipating a user's wants and adding the feature in the interface is often a logical progression that ends up in stretch goals for project.*

- Deploy to Heroku!

  *Deploying a project makes it available to the masses and is a necessary step for which to prepare when planning a project.*


  ## Project Map
* Logic must be on server-side
* Do not use .eval() 
[x] npm installs, create server folder and public folder, create, source and test client js, server js, html, css, jquery files
[x] Create basic layout for app in html file
[x] Create function to capture input on click of '=', bundle as object and use POST on client side to send info to server side
[x] Wire server side (app.post) to get input object data from client side
[x] Create function to clear input fields on click of 'C' button
[x] Create functions to handle each mathematical operator click on client side and bundle with numbers object
[x] Create function on server side to do mathematical calculation and send back OK when done (res.send(201)) 
[x] Create function with GET request on client side to get actual calculation from server side
[x] Create function on client side to GET record of math operations and solutions and display in DOM
