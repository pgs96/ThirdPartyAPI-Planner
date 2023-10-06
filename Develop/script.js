
$(document).ready(function () {
 
  // DATE AND TIME CODE

  var todaysDate = document.querySelector("#currentDay");

  var actualTime = dayjs().format("dddd, MMMM D, YYYY, h:mm a");
  
  todaysDate.textContent = ('Date & Time: ' + actualTime); 
 
 

  // SAVE BUTTON CODE FOR TEXT INSERTED ON TIME FRAME BOX
  
  $(".saveBtn").click(function (event) {
   
    event.preventDefault();
   
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
   
    localStorage.setItem(time, value);
    
  });

//  PAST, PRESENT AND FUTURE FUNCTION

  $(".time-block").each(function () {
    
    var userTime = $(this).attr("id").split("-")[1];

    if (actualTime == userTime) {
      $(this).addClass("present");
      $(this).children(".time-block").addClass("present");

    } else if (actualTime < userTime) {
      $(this).removeClass("present");
      $(this).addClass("future");

    } else if (actualTime > userTime) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }

  });


});

