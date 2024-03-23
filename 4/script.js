// // Логічне І &&
// console.log("Rickroll" && "");
// console.log("Rickroll" && "" && "SABAKA");

// const salary = 500;
// if (salary >= 1000 && salart <= 2000) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let cost;
// const supscribtion = 'premium';

// // ternarniy

// let result = 40 > 18 ? true : false;
// console.log(result);

//Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’ Якщо відвідувач вводитьc, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”

// const value = prompt("Яка офіційна назва JavaScript?", "");

// let answer = value === "ESMAScript" ? "Правильно!" : "Ви не знаєте? ECMAScript!";
// alert(answer);

//! Використовуючи if..else, напишіть код, що отримує число з інпуту і потім виводить повідомлення на екран:
// 1, якщо значення більше нуля,
// -1, якщо меньше нуля,
// 0, якщо дорівнює нулю.

// const value = prompt("Write a number");

// if (+value > 0) {
//   alert(1);
// } else {
//   if (+value === 0) {
//     alert(0);
//   } else {
//     if (+value < 0) {
//       alert(-1);
//     }
//   }
// }

// let result;

// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }

// let a = 20;
// let b = -3;
// let result;

// result = a + b < 4 ? "Нижче" : "Вище";
// console.log(result);

//! напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2

// let x1 = 5;
// let x2 = 10;
// const valueNum = prompt("Write a number", "");
// if (valueNum < x1) {
//   alert("Number contains to the x1");
// } else if (valueNum > x2) {
//   alert("Number contains after x2");
// } else if (x1 < valueNum && valueNum > x2) {
//   alert("Number contains in the line from x1 to x2");
// } else if (x1 > valueNum || valueNum < x2) {
//   alert("Number contains in line before x1 and after x2");
// } else {
//   alert("Number doesn't contain in the line");
// }

// //! Напиши скрипт обробки покупки в магазині.
//   - Баланс користувача зберігається в змінній balance - отримати з інпуту
//   - Сумма покупки зберігається в змінній payment - отримати з інпуту
//   - Перед перевіркою вивести повідомлення на екран:
//   «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість
//   доступних коштів на рахунку»
//  - Якщо сума покупки не перевищує баланс:
//      - Відняти з балансу суму покупки
//    - Вивести повідомлення «На рахунку залишилося [

// let balance = +prompt("Напиши баланс", "");
// let payment = +prompt("Напиши суму покупки", "");

// alert(
//   `Загальна вартість замовлення ${payment} кредитів. Кількість на рахунку ${balance}`
// );

// if (payment < balance) {
//   balance -= payment;
//   alert(`На рахунку залишилось ${balance}`);
// }
// alert("Операція завершена")

// Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час (партнерська програма).

// Користувач вводить в інпут сумму витрачену в даному магазині і отримує розмір знижки як результат.
//  - Загальна сума витрачених коштів зберігається в змінній totalSpent
//  - Сума поточного платежа зберігається в змінній payment
//  - Знижка зберігається в змінній discount

//  - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
//  - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
//  - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
//  - Якщо витрачено менше 100) - не партнер, знижка 0%

//  - В результаті вивести повідомлення
//  «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'

// let totalSpent = +prompt("Введіть суму витрачених коштів");
// let payment = +prompt("Введіть суму поточного платежа");
// let discount = 0;

// if (totalSpent > 100 && totalSpent < 1000) {
//   discount = 2;
//   alert("Бронзовий партнер, знижка 2%");
// } else if (totalSpent > 1000 && totalSpent < 5000) {
//   discount = 5;
//   alert("Срібний партнер, знижка 5%");
// } else if (totalSpent >= 5000) {
//   discount = 10;
//   alert("Золотий партнер, знижка 10%");
// } else {
//   alert("У вас ще немає партнерської знижки");
// }

// let discountAmount = payment * (discount / 100);
// alert(discountAmount);

//Домашнє завдання

// #1

// const input1 = prompt("Значення1", "")
// const input2 = prompt("Значення2", "");

// const answer =
//   input1 && input2 ? "Обидва поля заповнені" : "Не всі поля заповнені";

// alert(answer);

// #2
// const num1 = +prompt("Перше число", "");
// const num2 = +prompt("Друге число", "");

// alert(num1 + num2 > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10");

// #3
// const text = prompt("type a text", "")
// const answer = text.includes("JavaScript")
//   ? "Текст містить слово JavaScript"
//   : "Текст не містить слово JavaScript";
//   alert(answer);

// #4
// const int = prompt("Ввведи число від 10 до 20");
// const answer =
//   int >= 10 && int <= 20
//     ? "Число входить в діапазон від 10 до 20"
//     : "Число не входить в діапазон від 10 до 20";
// alert(answer);

// #5

// const name = prompt("Ім'я не менше 3 символів", "");
  
// const email = prompt("Електрона пошта", "");
// const password = prompt("Пароль не менше 6 символів", "");

// if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
//   location.href = "http://historymine.cloud:25648/#world;flat;18404,64,5556;1";
// } else {
//   alert("Помилка")
// }


