// Таймер 1: Відлік з 1 години
let minutes = 60;

const timer1 = setInterval(() => {
  minutes--;
  document.getElementById("timer1").textContent = `${minutes}:00`;

  if (minutes === 30) {
    document.getElementById("message1").textContent =
      "Залишилось менше половини часу!";
  }

  if (minutes === 0) {
    clearInterval(timer1);
    document.getElementById("message1").textContent = "Час вийшов!";
  }
}, 60000);

// Таймер 2: Відлік з 30 секунд
let milliseconds = 30000;
const timer2Element = document.getElementById("timer2");
const animationDiv = document.getElementById("animation");
const startButton = document.getElementById("startButton");

const timer2 = setInterval(() => {
  milliseconds -= 10;
  timer2Element.textContent = (milliseconds / 1000).toFixed(3);

  if (milliseconds <= 10000 && animationDiv.style.display === "none") {
    animationDiv.style.display = "block";
  }

  if (milliseconds <= 0) {
    clearInterval(timer2);
    animationDiv.style.display = "none";
    startButton.disabled = false;
    timer2Element.textContent = "0.000";
  }
}, 10);
