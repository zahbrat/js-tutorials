import Chart from "chart.js/auto";

(async function () {
  const data = [
    { year: 1, count1: 39.32, count2: 39.87 },
    { year: 2, count1: 49.46, count2: 46.61 },
    { year: 3, count1: 44.2, count2: 51.99 },
  ];

  const chart = new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: data.map((row) => `Тур ${row.year}`),
      datasets: [
        {
          label: "Янукович",
          data: data.map((row) => row.count1),
          backgroundColor: "rgba(255, 99, 132, 0.8)",
          barThickness: 10,
        },
        {
          label: "Ющенко",
          data: data.map((row) => row.count2),
          backgroundColor: "rgba(54, 162, 235, 0.8)",
          barThickness: 10,
        },
      ],
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.dataset.label + ": " + context.raw + "%";
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Відсотки",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
})();
