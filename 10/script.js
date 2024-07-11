// #1

// const ask = (callback) => {
//           let button = alert("Натисніть Так");

//           callback();
// };

// const print = () => {
//           alert("Hello, world");
// }

// ask(print)

// #2

// let randomNum = Math.floor(Math.random() * 100) + 1;

// const guessNum = () => {
//   let userGuess = +prompt("Введіть якесь число від 1 до 100", "");

//   if (userGuess === randomNum) {
//     return "Правильно!";
//   }

//   return "Неправильно!";
// };

// alert(guessNum())

// #3

// let clicksAmount = 0;

// const addClick = (callback) => {
//   clicksAmount += 1;
//   callback();
// };

// const alertClick = () => {
//   alert(clicksAmount);
// };

// const handleClick = () => {
//   addClick(alertClick);
// };

// document.querySelector("html").addEventListener("click", handleClick);

// #4

// const applyCallbackToEachElement = (arr, callback) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }

//   return result;
// };

// const squareCallback = (x) => x * x;

// const result = applyCallbackToEachElement([1, 2, 3, 4, 5], squareCallback);
// alert(result);

// 5

// const calculateDiscountedPrice = (price, discount, callback) => {   
//     const discountedPrice = price - (price * discount / 100);
//     callback(discountedPrice);
// }; 

// const showDiscountedPrice = (discountedPrice) => {
//     console.log(`Discounted price: ${discountedPrice}`);
// };

// calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90