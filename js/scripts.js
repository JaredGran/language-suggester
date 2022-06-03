$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const yes = parseInt(5)
    const no = parseInt(0)
    const result =add(yes + no)
    if (result<= 10) {
      $('#under10').show();
    }
    else if (result === 15) {
      $('#e15').show();
    }
    else (result >= 20) {
      $('#20').show();
    }
  });
});