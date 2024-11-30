// Завдання 1: Таймер інтервалу
let count = 0;
const intervalId = setInterval(() => {
  count++;
  document.getElementById(
    "intervalMessage"
  ).textContent = `Повідомлення ${count}`;
  if (count === 5) {
    clearInterval(intervalId);
    document.getElementById("intervalMessage").textContent +=
      " Таймер зупинено.";
  }
}, 1000);

// Завдання 2: Анімація елементів
const animatedBox = document.getElementById("animatedBox");
let position = 0;
const animationId = setInterval(() => {
  position += 10;
  animatedBox.style.left = position + "px";
  animatedBox.style.top = position + "px";
  if (position > 300) clearInterval(animationId);
}, 100);

// Завдання 3: Інтерактивна гра
const game = document.getElementById("game");
const scoreElement = document.getElementById("score");
let score = 0;
let time = 20;

const createTarget = () => {
  const target = document.createElement("div");
  target.className = "target";
  target.style.top = Math.random() * (window.innerHeight - 50) + "px";
  target.style.left = Math.random() * (window.innerWidth - 50) + "px";
  game.appendChild(target);

  target.addEventListener("click", () => {
    score++;
    scoreElement.textContent = score;
    target.remove();
  });

  setTimeout(() => target.remove(), 1000);
};

const gameIntervalId = setInterval(() => {
  if (time > 0) {
    createTarget();
    time--;
  } else {
    clearInterval(gameIntervalId);
    alert(`Гру закінчено! Ваш результат: ${score} очок.`);
  }
}, 1000);

// Завдання 4: Контроль часу
const startTimer = () => {
  const input = document.getElementById("timeInput").value;
  const timeMessage = document.getElementById("timeMessage");
  const time = parseInt(input, 10);

  if (isNaN(time) || time <= 0) {
    timeMessage.textContent = "Введіть коректний час!";
    return;
  }

  timeMessage.textContent = `Таймер запущено на ${time} секунд`;
  setTimeout(() => {
    timeMessage.textContent = "Час вийшов!";
  }, time * 1000);
};
