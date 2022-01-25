function calc(a, operation, b) {
  if (typeof a !== 'number' || a !== a || typeof operation !== 'string' || typeof b !== 'number' || b !== b) {
    return 'Error'
  }

  let operators = {
    sum: a + b,
    minus: a - b,
    multi: a * b,
    division: a / b,
    pew: a ** b,
    remainder: a % b,
  }

  if(operators[operation]) {
    return operators[operation]
  } else {
    return 'Unknown operation'
  }
}

console.log(calc(10, 'multi', 22))