//business logic
//user-interface logic
var array = [];

$(document).ready(function() {
  $("form#number-input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    var result = message(userInput);

    function message (input) {

      var topNumber = input;
      var string = input.toString();
      if (input % 3 === 0 && input !== 0) {
        return "I'm sorry Dave. I'm afraid I can't do that";
      } else if (string.indexOf(1) !== -1) {
        return "BOOP!";
      } else if (string.indexOf(0) !== -1) {
        return "BEEP!";
      } else {
        for (var index = topNumber; index>-1; index--) {
          array.push(index);
        };
        return array;
      }
    };

    $("#results").text(result);
  });
});
