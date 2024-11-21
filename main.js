
var myInput = document.getElementById("input");
var myButton = document.getElementById("btn");
var myOutput = document.getElementById("message");   


myButton.onclick = function() {
  // Get the value of the input field 
  var inputValue = myInput.value; 

  if (inputValue != "") {
    // Put the value of the input field into the output field
    myOutput.innerHTML = inputValue;
    // Clear the input field 
    myInput.value = "";
  } else {
    myOutput.innerHTML = "Error: Please enter something!";
  }
}