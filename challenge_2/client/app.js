$(document).ready(function () {
  $('form').submit(function(event) { // on submit click
    //console.log($("input:first").val());
    //make our ajax pass to our express server
    var text = ($('input:first').val());
    console.log(text);
    $.ajax({
      type: 'POST',
      url: "http://localhost:3000/submission",
      contentType: 'application/json',
      data: text,
      success: function(data) {
        $('body').append(data);
      },
      error: function() {
        console.log("err");
      }
    });
    event.preventDefault();
  });
});