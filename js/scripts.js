//business logic

var userInput;
var result;
var userName;
var array = [];

function message (input) {

  array = [];
  $("#results").hide();

  if (input % 1 === 0 && userName) {
    if (input % 3 === 0 && input !== 0) {
      return "I'm sorry " + userName + ". I'm afraid I can't do that.";
    } else if (input.toString().indexOf(1) !== -1) {
      return "BOOP!";
    } else if (input.toString().indexOf(0) !== -1) {
      return "BEEP!";
    } else {
      for (var index = input; index>-1; index--) {
        array.push(index);
      };
    return array.reverse();
    }
  } else {
    return "Stop fooling around " + userName +".";
    }
};

//user-interface logic

$(document).ready(function() {
  $("#number-input").submit(function(event) {

    event.preventDefault();

    userInput = parseInt($("#number").val());
    userName = $("#name").val();
    result = message(userInput);

    $("#results").fadeIn(1000);
    $("#results").text(result);
  });
});
