$(document).ready(function() {
  $("form#formlanguage").submit(function(event) {
    event.preventDefault();
    const drink = $("#beverage").val();
    if (drink === "1") {
      $('#coffee').show();
    }
    else if (drink === "2") {
      $('#tea').show();
    }
    else {
      $('#kombucha').show();
    }
  });
});