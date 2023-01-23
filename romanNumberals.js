class RomanConverter {
  //Convert decimal to Roman
  static decimalToRoman(decimal) {
    if (decimal < 1 || decimal > 3999) {
      return "Invalid input";
    }
    let roman = "";
    let romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let decimalNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i = 0; i < decimalNumeral.length; i++) {
      while (decimal >= decimalNumeral[i]) {
        roman += romanNumeral[i];
        decimal -= decimalNumeral[i];
      }
    }
    return roman;
  }

  //Convert Roman to decimal
  static romanToDecimal(roman) {
    if (!/^[MDCLXVI]*$/.test(roman)) {
      return "Invalid input";
    }
    let decimal = 0;
    let romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let decimalNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i = 0; i < decimalNumeral.length; i++) {
      while (roman.indexOf(romanNumeral[i]) === 0) {
        decimal += decimalNumeral[i];
        roman = roman.substring(romanNumeral[i].length);
      }
    }
    return decimal;
  }
}
