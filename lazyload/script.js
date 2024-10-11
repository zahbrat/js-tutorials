const throttleFunction = _.throttle(() => {
  console.log("Throttle function called");
}, 2000);

window.addEventListener("click", throttleFunction);

const debounceFunction = _.debounce(() => {
  console.log("Debounce function called");
}, 2000);

window.addEventListener("click", debounceFunction);

const vanillaOutput = document.querySelector(".vanilla");
const throttledOutput = document.querySelector(".throttled");
const debounceOutput = document.querySelector(".debounced");

const eventCounter = {
  vanilla: 0,
  throttled: 0,
  debounced: 0,
};

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 2000)
);

document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      eventCounter.debounced += 1;
      debounceOutput.textContent = eventCounter.debounced;
    },
    2000,
    { leading: true, trailing: false }
  )
);

// Задачі

// #1

// Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер. Використовуйте метод throttle з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно виконати при введенні тексту.

const input1 = document.querySelector('.task-1 .input')

const input1Throttle = _.throttle(() => {
  const dataFromInput = input1.value;
  console.log('Input value:', dataFromInput);
}, 500);

input1.addEventListener('input', input1Throttle);

// #2

// Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер. Використовуйте метод throttle з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно виконати при введенні тексту.

const input2 = document.querySelector(".task-1 .input");

const input2Throttle = _.debounce(() => {
  const dataFromInput = input2.value;
  console.log("Input value:", dataFromInput);
}, 500);

input2.addEventListener("input", input2Throttle);

// #3

// Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою, змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того, щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.

const graph = document.getElementById("graph");
const point = document.getElementById("point");

function updatePointPosition(event) {
  const rect = graph.getBoundingClientRect();
  const x = event.clientX - rect.left - point.offsetWidth / 2;
  const y = event.clientY - rect.top - point.offsetHeight / 2;

  point.style.background = 'red'

  point.style.left = `${x}px`;
  point.style.top = `${y}px`;
}

const throttledUpdate = _.throttle(updatePointPosition, 50);

graph.addEventListener("mousemove", throttledUpdate);

// #4

// Потрібно забезпечити виклик функції при завершенні переміщення мишкою. Використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яку потрібно викликати при завершенні переміщення мишкою.