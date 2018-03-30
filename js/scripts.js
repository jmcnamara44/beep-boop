var message = function(input) {
  if (input === 0) {
    return "BEEP!";
  } else {
    return (input - input) + ", " + input;
  }
};





$(document).ready(function() {
  $("#number-input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    var result = message(userInput);

    $("#results").text(result);
  });
});
