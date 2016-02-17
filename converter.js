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
button.addEventListener("click", toCelsius() );

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// This is code for stlying converted temperature from green to blue or red.
// 


