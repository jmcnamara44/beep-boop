var message = function(input) {
  if (input === 4) {
    return (input - input) + ", " + input;
  } else {
    return "not"
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
