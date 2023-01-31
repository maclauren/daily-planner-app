// Display the current day at the top of the calendar when a user opens the planner.
// retrieve current date, add to header id currentDay

// var dateHeader = document.querySelector("#currentDay");
// var today = new Date();
// dateHeader.innerHTML = today.toDateString();

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// define function, use momentjs to get current hour, iterate through time-block class (make string to integer), compare to the hour to id and add class of past/present/future
function timeBlockColor() {
    var hour = moment().hours();
    // this = current time block element
    // should this be textarea instead of timeblock? neither work
    $(".event").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        // console.log(currentHour)
        if (currentHour < hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};
timeBlockColor()
// Save the event in local storage when the save button is clicked in that timeblock.
// Persist events between refreshes of a page.
// declare var for savebtn with jquery
var saveBtn = $(".saveBtn");
// save button click event listener
$(".saveBtn").on("click", function () {
    // persist even after refresh
    var savedInput = $(this).siblings("textarea").val()
    // console.log(savedInput);
    var timeInput = $(this).siblings("textarea").attr("id")
    // console.log(timeInput);
    localStorage.setItem(timeInput, savedInput);
  });
// var seventeen = localStorage.getItem("17");
// console.log(seventeen);
// fetch if exists in local storage
  $("#9").text(localStorage.getItem("9"));
  $("#10").text(localStorage.getItem("10"));
  $("#11").text(localStorage.getItem("11"));
  $("#12").text(localStorage.getItem("12"));
  $("#13").text(localStorage.getItem("13"));
  $("#14").text(localStorage.getItem("14"));
  $("#15").text(localStorage.getItem("15"));
  $("#16").text(localStorage.getItem("16"));
  $("#17").text(localStorage.getItem("17"));
