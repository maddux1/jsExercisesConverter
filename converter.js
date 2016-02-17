function toCelsius() {
  var inputTemp = document.getElementById("inputField").value;
  var outputTemp = (((inputTemp - 32) * 5) / 9);
  document.getElementById("output").innerHTML = "<p>" + outputTemp + "</p>";
}

function toFahrenheit() {
  var inputTemp = document.getElementById("inputField").value;
  var outputTemp = (((inputTemp * 9) / 5) + 32);
  document.getElementById("output").innerHTML = "<p>" + outputTemp + "</p>";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converterId");
button.addEventListener("click", determineConverter);

var clearButton = document.getElementById("clear");

// Take this to function 
// var removedText = document.getElementById("inputField").value =
//   document.getElementById("inputField").value ;
clearButton.addEventListener("click", removedText);

// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter() {
  if (document.getElementById("toC").checked) {
    toCelsius();
  } else if (document.getElementById("toF").checked) {
  toFahrenheit();
  }
}

  // console.log("event", clickEvent);

// This is code for stlying converted temperature from green to blue or red.
// 


