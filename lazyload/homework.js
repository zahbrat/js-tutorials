// Слайдер змінює розмір зображення
const sliderInput = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

sliderInput.addEventListener(
  "input",
  _.debounce(() => {
    const scale = sliderInput.value / 100;
    image.style.transform = `scale(${scale})`;
  }, 200)
);

// Плавний рух об'єкта за мишкою
const box = document.getElementById("box");

document.addEventListener(
  "mousemove",
  _.debounce((event) => {
    box.style.left = `${event.pageX - 25}px`;
    box.style.top = `${event.pageY - 25}px`;
  }, 100)
);
