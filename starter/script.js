// JUMBOTRON
// Display the current day at the top of the calendar when a user opens the planner.
// retrieve current date, add to header id currentDay

var dateHeader = document.querySelector("#currentDay");
var today = new Date();
dateHeader.innerHTML = today.toDateString();

// $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
// why doesn't moment.js work???

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// define function, use momentjs to get current hour, iterate through time-block class (make string to integer), compare to the hour to id and add class of past/present/future
function timeBlockColor() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour < hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};

// Save the event in local storage when the save button is clicked in that timeblock.


