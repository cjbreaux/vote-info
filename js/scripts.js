$(document).ready(function(){
  var age = parseInt(prompt("What is your age?"));

  if(age>=18) {
    $(".over18").toggle();
  } else {
    $(".under18").toggle();
  }
});
