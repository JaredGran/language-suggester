$(document).ready(function() {
  $("form#formlanguage").submit(function(event) {
    event.preventDefault();
    const drink = $("#beverage").val();
    if (drink === "1") {
      $('#coffee').show();
      $('#tea').hide()
      $('#kombucha').hide()}
    else if (drink === "2") {
      $('#tea').show();
      $('#coffee').hide();
      $('#kombucha').hide()}
    else {
      $('#kombucha').show();
      $('#coffee').hide();
      $('#tea').hide()}
  });
});