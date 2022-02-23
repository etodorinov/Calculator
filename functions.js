const screenElement = document.getElementById("screen");
const resetButtonElement = document.getElementById("reset");
const plusButtonElement = document.getElementById("plus");
const minusButtonElement = document.getElementById("minus");
const multiplyButtonElement = document.getElementById("multiply");
const deleteButtonElement = document.getElementById("division");
const equalButtonElement = document.getElementById("equal");
const percentButtonElement = document.getElementById("percent");
const squareRootButtonElement = document.getElementById("square-root");
const dotButtonElement = document.getElementById("dot");
const doubleZeroButtonElement = document.getElementById("double_zero");
const zeroButtonElement = document.getElementById("zero");
const oneButtonElement = document.getElementById("one");
const twoButtonElement = document.getElementById("two");
const threeButtonElement = document.getElementById("three");
const fourButtonElement = document.getElementById("four");
const fiveButtonElement = document.getElementById("five");
const sixButtonElement = document.getElementById("six");
const sevenButtonElement = document.getElementById("seven");
const eightButtonElement = document.getElementById("eight");
const nineButtonElement = document.getElementById("nine");

screenElement.textContent = "0";

resetButtonElement.addEventListener("click", resetCalculator);
plusButtonElement.addEventListener("click", addNumbers);
minusButtonElement.addEventListener("click", subtractNumbers);
multiplyButtonElement.addEventListener("click", multiplyNumbers);
deleteButtonElement.addEventListener("click", deleteNumbers);
equalButtonElement.addEventListener("click", showResult);
percentButtonElement.addEventListener("click", percentCalculations);
squareRootButtonElement.addEventListener("click", squareRootCalculations);
dotButtonElement.addEventListener("click", dotPressed);
doubleZeroButtonElement.addEventListener("click", doubleZeroPressed);
zeroButtonElement.addEventListener("click", zeroPressed);
oneButtonElement.addEventListener("click", onePressed);
twoButtonElement.addEventListener("click", twoPressed);
threeButtonElement.addEventListener("click", threePressed);
fourButtonElement.addEventListener("click", fourPressed);
fiveButtonElement.addEventListener("click", fivePressed);
sixButtonElement.addEventListener("click", sixPressed);
sevenButtonElement.addEventListener("click", sevenPressed);
eightButtonElement.addEventListener("click", eightPressed);
nineButtonElement.addEventListener("click", ninePressed);

function resetCalculator(e) {
  screenElement.textContent = "0";
}
function addNumbers(e) {}
function subtractNumbers(e) {}
function multiplyNumbers(e) {}
function deleteNumbers(e) {}
function showResult(e) {}
function percentCalculations(e) {}
function squareRootCalculations(e) {}
function dotPressed(e) {}
function doubleZeroPressed(e) {
  if (screenElement.textContent !== "0" && screenElement.textContent !== "00") {
    screenElement.textContent += "00";
  }
}
function zeroPressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "0";
  } else {
    screenElement.textContent += "0";
  }
}
function onePressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "1";
  } else {
    screenElement.textContent += "1";
  }
}
function twoPressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "2";
  } else {
    screenElement.textContent += "2";
  }
}
function threePressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "3";
  } else {
    screenElement.textContent += "3";
  }
}
function fourPressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "4";
  } else {
    screenElement.textContent += "4";
  }
}
function fivePressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "5";
  } else {
    screenElement.textContent += "5";
  }
}
function sixPressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "6";
  } else {
    screenElement.textContent += "6";
  }
}
function sevenPressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "7";
  } else {
    screenElement.textContent += "7";
  }
}
function eightPressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "8";
  } else {
    screenElement.textContent += "8";
  }
}
function ninePressed(e) {
  if (screenElement.textContent === "0" && screenElement.textContent !== "00") {
    screenElement.textContent = "9";
  } else {
    screenElement.textContent += "9";
  }
}

console.log(screenElement);
console.log(resetButtonElement);
console.log(plusButtonElement);
console.log(minusButtonElement);
console.log(multiplyButtonElement);
console.log(equalButtonElement);
console.log(percentButtonElement);
console.log(squareRootButtonElement);
console.log(dotButtonElement);
console.log(doubleZeroButtonElement);
console.log(zeroButtonElement);
console.log(oneButtonElement);
console.log(twoButtonElement);
console.log(threeButtonElement);
console.log(fourButtonElement);
console.log(fiveButtonElement);
console.log(sixButtonElement);
console.log(sevenButtonElement);
console.log(eightButtonElement);
console.log(nineButtonElement);
