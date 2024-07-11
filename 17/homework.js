//* Завдання 1

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.onclick = () => btn.innerText = input.value;

//* Завдання 2

const img = document.querySelector('.task-2__img')

img.src =
    "./img/task-2.png";
  
//* Завдання 3

const link = document.querySelector('.task-3__link');
link.href = "https://www.youtube.com/channel/UC58qfviAsuNvl3C-UOU_OGw";

const imgInLink = document.querySelector(".task-3__link");
imgInLink.alt = "Будь ласка, підпишіться на мій ютуб канал :)"

//* Завдання 4

const li = document.querySelectorAll('.task-4__li');
li[0].innerText = "🇺🇦";