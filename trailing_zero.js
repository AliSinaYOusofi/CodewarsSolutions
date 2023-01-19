function incrementString(str) {
  let num = "";
  let newStr = "";

  // Iterate through the string in reverse
  for (let i = str.length - 1; i >= 0; i--) {
    // If the current character is a number, add it to the num string
    if (!isNaN(str[i])) {
      num = str[i] + num;
    } else {
      // If the current character is not a number, stop the loop
      newStr = str.slice(0, i + 1);
      break;
    }
  }

  // If there is no number at the end of the string, append 1
  if (num === "") {
    return newStr + "1";
  }

  // Increment the number by 1
  num = (parseInt(num) + 1).toString();

  // Pad the number with leading zeroes
  while (num.length < str.slice(newStr.length).length) {
    num = "0" + num;
  }
  return newStr + num;
}
