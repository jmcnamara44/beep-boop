var message = function(input) {
  if (input % 3 === 0 && input !== 0) {
    return "I'm sorry Dave. I'm afraid I can't do that";
  } else if (input === 1) {
    return "BOOP!";
  } else if (input === 0) {
    return "BEEP!"
  } else {
    return (input - input) + "-" + input;
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
