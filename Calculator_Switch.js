function calc(a, operation, b) {

  if (typeof a !== 'number' || isNaN(a) === true || typeof operation !== 'string' || typeof b !== 'number' || isNaN(b) === true) {
    return 'Error'
  }
  switch (operation) {
    case 'sum':
      return a + b
    case 'minus':
      return a - b
    case 'multi':
      return a * b
    case 'division':
      return a / b
    case 'pow':
      return a ** b
    case 'remainder':
      return a % b
    default:
      return 'Unknown operation'
  }
}