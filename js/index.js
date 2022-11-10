//0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65). Функція приймає в якості параметра вік людини і повертає значення булевського типу.
//Очікуваний результат:
//isWorkingAgePerson(20); // true
//isWorkingAgePerson(4); // false
//isWorkingAgePerson(88); // false

function isWorkingAgePerson(minAge, maxAge) {
  let userAge = minAge < 20 ? true : false;
  console.log(userAge);
  let userAge2 = minAge < 4 ? true : false;
  console.log(userAge2);
  let userAge3 = maxAge > 88 ? true : false;
  console.log(userAge3);
}
console.log(isWorkingAgePerson(16, 65));

//1) *Реалізувати функцію, яка приймає число і повертає булевське значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log("3", isPrime(3));

//2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):
//checkMultiplicity(25, 5) // true
//checkMultiplicity(15, 3) // true
//checkMultiplicity(15, 5) // true
//checkMultiplicity(15, 4) // false

function checkMultiplicity(a, b) {
  const s = Math.round(a / b);
  return s;
}
console.log("checkMultiplicity(25,5) :>>", checkMultiplicity(25, 5));
console.log("checkMultiplicity(15,3) :>>", checkMultiplicity(15, 3));
console.log("checkMultiplicity(15,5) :>>", checkMultiplicity(15, 5));
console.log("checkMultiplicity(15,4) :>>", checkMultiplicity(15, 4));

//3) Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).

const a = Number(prompt("Перша сторона трикутника"));
const b = Number(prompt("Друга сторона трикутника"));
const c = Number(prompt("Третя сторона трикутника"));
const m = Math.max(a, b, c);
const s = a + b + c - m;

if (s - m) {
  console.log("true");
} else {
  console.log("false");
}

//4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

const numA = Number(prompt("Одна сторона трикутника"));
const numB = Number(prompt("Друга сторона трикутника"));
const numC = Number(prompt("Третя сторона трикутника"));

function testMath(numA, numB, numC) {
  return (1 / 2) * numA * numB * Math.sin((numC * Math.PI) / 180);
}
console.log("Площа трикутника =", testMath(numA, numB, numC));

//2 функції на вибір реалізувати у форматі функціонального виразу (function expression).

const f = function () {
  console.log("Hello");
};
f();

let f2 = (text, name) => text + "," + name + "!";
console.log(f2("Hello", "my friends"));

//Буде плюсом використовувати JSDoc (на вибір 2 функції)

/**
 * @type {number} The userAge age
 */

const userAge = function () {
  console.log(35);
};
userAge();

/**
 * Ця функція прийматиме інформацію про людину
 *
 * @param {string} userName The person full name
 * @param {number} age The person age
 * @returns {object} The person object
 */
function person(userName, age) {
  return {
    userName: userName,
    age: age,
  };
}
