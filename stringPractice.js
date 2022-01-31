function showVerticalMessage(str) {
  let maxLength = 10

  if (str[0] === 'м') {
    str = str[0].toUpperCase() + str.slice(1, maxLength)
  } else {
    str = str.slice(0, maxLength)
  }

  for (let char of str) {
    console.log(char)
  }
}
