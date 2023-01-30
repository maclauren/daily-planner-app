// Enable js dynamic events to be added by the user
// click event function, var for time - plant flag, var for event - free text 
$(document).ready(function() {
    // adjustment to get events from local storage when page loads
    $('.timeblock-row').each(function() {
      var time = $(this).find('.time').text();
      var storedEvent = localStorage.getItem(time);
      if (storedEvent) {
        $(this).find('.event').text(storedEvent);
      }
    });

    $('.timeblock-row').click(function() {
      var time = $(this).find('.time').text();
      var event = prompt("Add event for " + time);
      $(this).find('.event').text(event);
      // adjustment to add new event to local storage
      localStorage.setItem(time, event);
    });
  });

