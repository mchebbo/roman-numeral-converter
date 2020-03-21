const toRoman = num => {
  const numeral = parseInt(num);
  if (numeral > 3999 || numeral < 0 || isNaN(numeral)) return "";
  if (numeral - 1000 >= 0) return "M" + toRoman(numeral - 1000);
  if (numeral - 900 >= 0) return "CM" + toRoman(numeral - 900);
  if (numeral - 500 >= 0) return "D" + toRoman(numeral - 500);
  if (numeral - 400 >= 0) return "CD" + toRoman(numeral - 400);
  if (numeral - 100 >= 0) return "C" + toRoman(numeral - 100);
  if (numeral - 90 >= 0) return "XC" + toRoman(numeral - 90);
  if (numeral - 50 >= 0) return "L" + toRoman(numeral - 50);
  if (numeral - 40 >= 0) return "XL" + toRoman(numeral - 40);
  if (numeral - 10 >= 0) return "X" + toRoman(numeral - 10);
  if (numeral - 9 >= 0) return "IX" + toRoman(numeral - 9);
  if (numeral - 5 >= 0) return "V" + toRoman(numeral - 5);
  if (numeral - 4 >= 0) return "IV" + toRoman(numeral - 4);
  if (numeral - 1 >= 0) return "I" + toRoman(numeral - 1);
  return "";
};

const fromRoman = romanNumber => {
  if (typeof romanNumber !== "string") return 0;
  var arabicValues = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
  var romanValues = [
    "CM",
    "M",
    "CD",
    "D",
    "XC",
    "C",
    "XL",
    "L",
    "IX",
    "X",
    "IV",
    "V",
    "I"
  ];
  let clonedRomanNUmber = romanNumber.toUpperCase();
  let index = 0;
  let number = 0;
  romanValues.forEach((e, i) => {
    index = clonedRomanNUmber.indexOf(romanValues[i]);
    while (index !== -1) {
      number += parseInt(arabicValues[i]);
      clonedRomanNUmber = clonedRomanNUmber.replace(romanValues[i], "-");
      index = clonedRomanNUmber.indexOf(romanValues[i]);
    }
  });
  return number;
};

export default { toRoman, fromRoman };
