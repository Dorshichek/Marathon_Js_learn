function calc(a, operation, b) {
  let isValid = typeof a !== 'number' || a !== a || typeof operation !== 'string' || typeof b !== 'number' || b !== b
  const operators = {
    sum: a + b,
    minus: a - b,
    multi: a * b,
    division: a / b,
    pew: a ** b,
    remainder: a % b,
  }

  if (isValid) {
    return 'Error'
  } else if (operators[operation]) {
    return operators[operation]
  } else {
    return 'Unknown operations'
  }
}

console.log(calc(10, 'multi', 22))