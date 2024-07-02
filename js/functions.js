// Функция проверяет длину строки
function checkStringLength(inputString, maxLength) {
  if(inputString.length <= maxLength) {
    return true;
  }
  return false;
}

// Функция проверяет является ли строка палиндромом

function isPalindrome(inputString) {

  const normalizedString = inputString.replace(/ /g, '').toLowerCase();

  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}

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


