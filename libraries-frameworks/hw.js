import Chart from "chart.js/auto";

import "@pnotify/core/dist/PNotify.css";
import { success, info, error } from "@pnotify/core";

const arrKeys = ["a", "b", "c", "d", "e", "f"];
let currentIndex;

const keyelement = document.querySelector("#key");

const generatekey = () => {
  currentIndex = Math.floor(Math.random() * arrKeys.length);
  keyelement.textContent = arrKeys[currentIndex];
};

window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === arrKeys[currentIndex]) {
    success({
      text: "Correct!",
    });
    currentIndex = Math.floor(Math.random() * arrKeys.length);
    keyelement.textContent = arrKeys[currentIndex];
  } else {
    error({
      text: "Wrong!",
    });
  }
});

const gameBtn = document.querySelector("#new-game");
gameBtn.addEventListener("click", () => {
  info({ text: "Started!" });
  generatekey();
});

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)", // прозорий фон
      borderColor: "#2196f3",
      borderWidth: 1,
      fill: true, // заповнити область під графіком
    },
  ],
};

// Отримуємо контекст канвасу
const ctx = document.getElementById("sales-chart").getContext("2d");

// Створюємо графік
const salesChart = new Chart(ctx, {
  type: "line", // тип графіка
  data: chartData,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Дні",
        },
      },
      y: {
        title: {
          display: true,
          text: "Кількість Продажів",
        },
      },
    },
  },
});
