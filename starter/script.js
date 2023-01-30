// JUMBOTRON
// Display the current day at the top of the calendar when a user opens the planner.
// retrieve current date, add to header id currentDay

var dateHeader = document.querySelector("#currentDay");
var today = new Date();
dateHeader.innerHTML = today.toDateString();

// var dateHeader = document.querySelector("#currentDay");
// var today = moment();
// dateHeader.innerHTML = today.format('MMMM Do YYYY');

// why doesn't moment.js work???

