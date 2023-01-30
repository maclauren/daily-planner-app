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

$(document).ready(function () {
    var currentHour = moment().format("HH");
    // Loop through each timeblock row
    $(".timeblock-row").each(function () {
      // Get the time for each timeblock
      var timeblockHour = $(this).find(".time").text().split(":")[0];
      // Set the background color based on past, present, future
      if (timeblockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeblockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });