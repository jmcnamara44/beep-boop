//business logic
//user-interface logic


$(document).ready(function() {
  $("#number-input").submit(function(event) {

    event.preventDefault();

    var userInput = parseInt($("#number").val());
    var result = message(userInput);
    var userName;
    var array = [];
    var topNumber;
    var string;

    function message (input) {
      userName = $("#name").val();
      array = [];
      topNumber = input;
      string = input.toString();
      $("#results").hide();

      if (input % 1 === 0 && userName) {
        if (input % 3 === 0 && input !== 0) {
          return "I'm sorry " + userName + ". I'm afraid I can't do that.";
        } else if (string.indexOf(1) !== -1) {
          return "BOOP!";
        } else if (string.indexOf(0) !== -1) {
          return "BEEP!";
        } else {
          for (var index = topNumber; index>-1; index--) {
            array.push(index  );
          };

        return array.reverse();
        }
      } else {
        return "Stop fooling around " + userName +".";
        }

    };
    $("#results").fadeIn(1000);
    $("#results").text(result);
  });
});
