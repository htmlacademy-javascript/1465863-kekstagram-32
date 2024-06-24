// Функция проверяет длину строки
function checkStringLength(inputString, maxLength) {
  if(inputString.length <= maxLength) {
    return true;
  }
  return false;
}

console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

// Функция проверяет является ли строка палиндромом

function isPalindrome(inputString) {

  const normalizedString = inputString.replace(/ /g, '').toLowerCase();

  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}

console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));

// Функция извлекает числа из строки
function extractDigits(input) {

  const str = input.toString();

  // Инициализируем переменную для хранения цифр
  let digits = '';

  // Перебираем каждый символ строки
  for (let i = 0; i < str.length; i++) {
    // Проверяем, является ли текущий символ цифрой
    if (!isNaN(parseInt(str[i]))) {
      // Если да, добавляем его к digits
      digits += str[i];
    }
  }

  if (digits !== '') {
    return parseInt(digits);
  }
  return NaN;
}

console.log(extractDigits('2023 год'));
console.log(extractDigits('ECMAScript 2022'));
console.log(extractDigits('1 кефир, 0.5 батона'));
console.log(extractDigits('агент 007'));
console.log(extractDigits('а я томат'));

console.log(extractDigits(2023));
console.log(extractDigits(-1));
console.log(extractDigits(1.5));
