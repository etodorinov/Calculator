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

let currentNumber = 0;
let temp = 0;
let result = 0;
let lastOperation = "";
let numbers = [];
let isPlusPressed = false;
let isMinusPressed = false;
let isMultiplyPressed = false;
let isDeletePressed = false;
let isPercentPressed = false;
let isSquareRootPressed = false;
let isEqualPressed = false;

function resetCalculator(e) {
  screenElement.textContent = "0";
  currentNumber = 0;
  temp = 0;
  result = 0;
  lastOperation = "";
  numbers = [];
  isPlusPressed = false;
  isMinusPressed = false;
  isMultiplyPressed = false;
  isDeletePressed = false;
  isPercentPressed = false;
  isSquareRootPressed = false;
  isEqualPressed = false;
}

function addNumbers(e) {
  if (!isPlusPressed) {
    if (lastOperation === "subtract") {
      subtractNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "multiply") {
      multiplyNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "delete") {
      deleteNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (!numbers.includes("+")) {
      numbers.push("+");
    }

    isPlusPressed = true;
    numbers.push(Number(screenElement.textContent));
    currentNumber = Number(screenElement.textContent);
    if (numbers.length === 2) {
      result = numbers[1];
    } else {
      result = numbers[1] + currentNumber;
      numbers.splice(1, 1, result);
    }
    screenElement.textContent = result;
    lastOperation = "add";

    // isPlusPressed = true;
    // numbers.push(Number(screenElement.textContent));
    // currentNumber = Number(screenElement.textContent);
    // result += currentNumber;
    // screenElement.textContent = result;
    // lastOperation = "add";
  }
}

function subtractNumbers(e) {
  if (!isMinusPressed) {
    if (lastOperation === "add") {
      addNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "multiply") {
      multiplyNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "delete") {
      deleteNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (!numbers.includes("-")) {
      numbers.push("-");
    }

    isMinusPressed = true;
    numbers.push(Number(screenElement.textContent));
    currentNumber = Number(screenElement.textContent);
    if (numbers.length === 2) {
      result = numbers[1];
    } else {
      result = numbers[1] - currentNumber;
      numbers.splice(1, 1, result);
    }
    screenElement.textContent = result;
    lastOperation = "subtract";
  }
}

function multiplyNumbers(e) {
  if (!isMultiplyPressed) {
    if (lastOperation === "add") {
      addNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "subtract") {
      subtractNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "delete") {
      deleteNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (!numbers.includes("*")) {
      numbers.push("*");
    }

    isMultiplyPressed = true;
    numbers.push(Number(screenElement.textContent));
    currentNumber = Number(screenElement.textContent);
    if (numbers.length === 2) {
      result = numbers[1];
    } else {
      result = numbers[1] * currentNumber;
      numbers.splice(1, 1, result);
    }
    screenElement.textContent = result;
    lastOperation = "multiply";

    // isMultiplyPressed = true;
    // numbers.push(Number(screenElement.textContent));
    // if (numbers.length === 2) {
    //   result = numbers[1];
    // } else {
    //   let numbersL = numbers.length;
    //   result = numbers[1];
    //   for (let i = 2; i < numbersL; i++) {
    //     result *= numbers[i];
    //   }
    // }
    // screenElement.textContent = result;
    // lastOperation = "multiply";
  }
}

function deleteNumbers(e) {
  if (!isDeletePressed) {
    if (lastOperation === "add") {
      addNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "subtract") {
      subtractNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (lastOperation === "multiply") {
      multiplyNumbers();
      numbers = [];
      lastOperation = "";
    }

    if (!numbers.includes("/")) {
      numbers.push("/");
    }

    isDeletePressed = true;
    numbers.push(Number(screenElement.textContent));
    currentNumber = Number(screenElement.textContent);
    if (numbers.length === 2) {
      result = numbers[1];
    } else {
      result = numbers[1] / currentNumber;
      numbers.splice(1, 1, result);
    }
    screenElement.textContent = result;
    lastOperation = "delete";
  }
}

function percentCalculations(e) {}

function squareRootCalculations(e) {}

function showResult(e) {
  isEqualPressed = true;

  if (lastOperation === "add") {
    if (isPlusPressed) {
      screenElement.textContent = result;
    } else {
      addNumbers();
    }
  }

  if (lastOperation === "subtract") {
    if (isMinusPressed) {
      screenElement.textContent = result;
    } else {
      subtractNumbers();
    }
  }

  if (lastOperation === "multiply") {
    if (isMultiplyPressed) {
      screenElement.textContent = result;
    } else {
      multiplyNumbers();
    }
  }

  if (lastOperation === "delete") {
    if (isDeletePressed) {
      screenElement.textContent = result;
    } else {
      deleteNumbers();
    }
  }

  currentNumber = 0;
  temp = 0;
  result = 0;
  lastOperation = "";
  numbers = [];
  isPlusPressed = false;
  isMinusPressed = false;
  isMultiplyPressed = false;
  isDeletePressed = false;
  isPercentPressed = false;
  isSquareRootPressed = false;
  isEqualPressed = false;
  screenElement.textContent = Number(screenElement.textContent);
}

function dotPressed(e) {
  if (!screenElement.textContent.includes(".")) {
    screenElement.textContent += ".";
  }
}

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
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "1";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "1";
  }
}

function twoPressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "2";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "2";
  }
}

function threePressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "3";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "3";
  }
}

function fourPressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "4";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "4";
  }
}

function fivePressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "5";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "5";
  }
}

function sixPressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "6";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "6";
  }
}

function sevenPressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "7";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "7";
  }
}

function eightPressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "8";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "8";
  }
}

function ninePressed(e) {
  if (
    (screenElement.textContent === "0" && screenElement.textContent !== "00") ||
    isPlusPressed ||
    isMinusPressed ||
    isMultiplyPressed ||
    isDeletePressed ||
    isPercentPressed ||
    isSquareRootPressed ||
    isEqualPressed
  ) {
    screenElement.textContent = "9";
    isPlusPressed = false;
    isMinusPressed = false;
    isMultiplyPressed = false;
    isDeletePressed = false;
  } else {
    screenElement.textContent += "9";
  }
}

// console.log(screenElement);
// console.log(resetButtonElement);
// console.log(plusButtonElement);
// console.log(minusButtonElement);
// console.log(multiplyButtonElement);
// console.log(equalButtonElement);
// console.log(percentButtonElement);
// console.log(squareRootButtonElement);
// console.log(dotButtonElement);
// console.log(doubleZeroButtonElement);
// console.log(zeroButtonElement);
// console.log(oneButtonElement);
// console.log(twoButtonElement);
// console.log(threeButtonElement);
// console.log(fourButtonElement);
// console.log(fiveButtonElement);
// console.log(sixButtonElement);
// console.log(sevenButtonElement);
// console.log(eightButtonElement);
// console.log(nineButtonElement);
