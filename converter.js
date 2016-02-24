function toCelsius() {
  var inputTemp = document.getElementById("inputField").value;
  var outputTemp = (((inputTemp - 32) * 5) / 9);
  document.getElementById("output").innerHTML = "<p>" + outputTemp + "</p>";
  if ( outputTemp > 32 ) {
    document.getElementById("output").className = "hotStuff";
  } else if ( outputTemp < 0 ) {
    document.getElementById("output").className = "coolStuff";
  }
};
  
function toFahrenheit() {
  var inputTemp = document.getElementById("inputField").value;
  var outputTemp = (((inputTemp * 9) / 5) + 32);
  document.getElementById("output").innerHTML = "<p>" + outputTemp + "</p>";
    if ( outputTemp > 90 ) {
    document.getElementById("output").className = "hotStuff";
  } else if ( outputTemp < 32 ) {
    document.getElementById("output").className = "coolStuff";
  }
};

var button = document.getElementById("converterId");
button.addEventListener("click", determineConverter);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearFancyBox);

function clearFancyBox() {
  var outPutClear = document.getElementById("output");
  outPutClear.innerHTML = "";
};

function determineConverter() {
  if (document.getElementById("toC").checked) {
    toCelsius();
  } else if (document.getElementById("toF").checked) {
  toFahrenheit();
  }
};


