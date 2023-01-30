// JUMBOTRON
// Display the current day at the top of the calendar when a user opens the planner.
// retrieve current date, add to header id currentDay

var dateHeader = document.querySelector("#currentDay");
var today = new Date();
dateHeader.innerHTML = today.toDateString();

// $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
// why doesn't moment.js work???

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// EVENT SUBMIT

var saveBtn = $(".saveBtn");

