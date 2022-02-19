const NUMBERS_COLLECTION = document.querySelectorAll('.number')
const OPERATORS_COLLECTION = document.querySelectorAll('.operator')
const BACKSPACE = document.querySelector('.delete')
const RESET = document.querySelector('.reset')
const EQUALS = document.querySelector('.equals')
let resultDisplay = document.querySelector('.result')
let operator = '',
    firstNumber = '',
    secondNumber = '';


for (let number of NUMBERS_COLLECTION) {
  number.addEventListener('click', addNumber)
}

for (let operator of OPERATORS_COLLECTION) {
  operator.addEventListener('click', addOperator)
}

BACKSPACE.addEventListener('click', backspace)

RESET.addEventListener('click', reset)

EQUALS.addEventListener('click', getResult)


function addNumber() {
  let symbols = 5

  if (!operator) {
    resultDisplay.textContent === '0' ?
        resultDisplay.textContent = this.textContent :
        resultDisplay.textContent += this.textContent
    firstNumber += this.textContent
  } else {
    resultDisplay.textContent += this.textContent
    secondNumber += this.textContent;
    console.log(secondNumber)
  }

  (resultDisplay.textContent.length >= symbols) ?
      resultDisplay.style.fontSize = '40px' :
      resultDisplay.style.fontSize = '96px'
}

function addOperator() {
  const isValid = !operator || resultDisplay.textContent[-1] === '0' ||
      +(resultDisplay.textContent[resultDisplay.textContent - 1]);

  (isValid) ?
      resultDisplay.textContent += this.textContent :
      resultDisplay.textContent = resultDisplay.textContent.slice(0, -1) + this.textContent

  switch (this.textContent) {
    case '+':
      operator = 'sum'
      return;
    case '-':
      operator = 'minus'
      return;
    case '×':
      operator = 'multi'
      return;
    case '÷':
      operator = 'division'
      return;
    default :
      return 'error';
  }
}

function backspace() {
  resultDisplay.textContent = resultDisplay.textContent.slice(0, -1)
}

function reset() {
  operator = ''
  firstNumber = ''
  secondNumber = ''
  resultDisplay.textContent = ''
}

function getResult() {
  resultDisplay.textContent = calc(operator, +firstNumber, +secondNumber);
  firstNumber = resultDisplay.textContent
  operator = ''
  secondNumber = ''
  console.log(operator, +firstNumber, +secondNumber)
}

function calc(operator, firstNumber, secondNumber) {
  const isNotValid = ((secondNumber === 0) && (operator === 'division') ||
      (typeof firstNumber !== 'number') || (!isFinite(firstNumber)) ||
      (typeof secondNumber !== 'number') || (secondNumber !== secondNumber));

  const MATH_OPERATIONS = {
    'sum': firstNumber + secondNumber,
    'minus': firstNumber - secondNumber,
    'multi': firstNumber * secondNumber,
    'division': firstNumber / secondNumber,
  }

  if (isNotValid) {
    return 'Error';
  } else if (operator in MATH_OPERATIONS) {
    return MATH_OPERATIONS[operator]
  }
}