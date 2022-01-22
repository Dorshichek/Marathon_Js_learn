function calc(a, operation, b) {

  if (typeof a !== 'number' || isNaN(a) === true || typeof operation !== 'string' || typeof b !== 'number' || isNaN(b) === true) {
    return 'Error'

  } else if (operation === 'sum') {
    return a + b
  } else if (operation === 'minus') {
    return a - b
  } else if (operation === 'multi') {
    return a * b
  } else if (operation === 'division') {
    return a / b
  } else if (operation === 'pow') {
    return a ** b
  } else if (operation === 'remainder') {
    return a % b
  }

  return 'Unknown operation'
}