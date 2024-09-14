//! Поширення подій

const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

let tempEL = document.querySelector("#child");

const logEvent = (e) => {
  console.log(`${e.currentTarget.id} - ${e.eventPhase}`);
};

//? eventPhase - фаза події
//? currentPhase - поточний елемент

// Занурення

grandparent.addEventListener("click", logEvent, true);
parent.addEventListener("click", logEvent, true);

// Спливання
grandparent.addEventListener("click", logEvent);
parent.addEventListener("click", logEvent);
child.addEventListener("click", logEvent);

// __________________________________________________________________________

const toolbar = document.querySelector("#mainToolbar");
const editGroup = document.querySelector("#editGroup");
const formatGroup = document.querySelector("#formatGroup");
const cutBtn = document.querySelector("#cutBtn");
const boldBtn = document.querySelector("#boldBtn");

const logEventToolBar = (e) => {
  console.log(
    `Element CLick: ${e.currentTarget.tagName} id: ${e.currentTarget}`
  );
  console.log(`Element CLick: ${e.target.tagName} id: ${e.target.id}`);
};

toolbar.addEventListener("click", logEventToolBar);
editGroup.addEventListener("click", logEventToolBar);
formatGroup.addEventListener("click", logEventToolBar);

cutBtn.addEventListener("click", (e) => {
  logEventToolBar(e);
  e.stopPropagation();

  console.log("Cut button stop спливання!");
});

boldBtn.addEventListener("click", (e) => {
  console.log("first cut");
});

boldBtn.addEventListener("click", (e) => {
  console.log("second cut");
  e.stopImmediatePropagation();
  console.log("stop");
});

boldBtn.addEventListener("click", (e) => {
  console.log("gidden cut");
});

//* Делегування подій

const colorPalete = document.querySelector(".color-palette");
const outputColor = document.querySelector(".output");

const randomColor = () =>
  Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

const createColorPaletteItems = () => {
  const items = [];

  for (let i = 0; i < 100; i++) {
    const color = `#${randomColor()}${randomColor()}${randomColor()}`;
    const item = document.createElement("button");
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");

    items.push(item);
  }

  colorPalete.append(...items);
};

createColorPaletteItems();

const selectColor = (e) => {
  if (e.target.nodeName !== "BUTTON") {
    console.log(e.target.dataset.color);
    //? Nodename - повертає назву тега у верхньому регістрі
    return;
  }

  const selectedColor = e.target.dataset.color;

  outputColor.textContent = "Selected color: - " + selectedColor;
  outputColor.style.backgroundColor = selectedColor;
};

colorPalete.addEventListener("click", selectColor);

const moviesArray = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
    name: "Gravity Falls",
    year: 2012,
    rating: 8.0,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSoDUHMOvg10lm4szQqI2uZZp_8CuPsMONA&s",
    name: "Думками навиворіт",
    year: 2012,
    rating: 8.0,
  },
  {
    img: "https://eneyida.tv/uploads/posts/2020-09/1599137179_1.jpg",
    name: "пінгвіни мадагаскару",
    year: 2012,
    rating: 8.0,
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
    name: "Gravity Falls",
    year: 2012,
    rating: 8.0,
  },
];

const moviesList = document.querySelector('.list');

moviesArray.forEach((movie) => {
  const movieItem = document.createElement('li');
  const { img, name, year, rating } = movie;

  movieItem.innerHTML = `
    <img src="${img}" alt="${name}" width="100">
    <h2>${name}</h2>
    <p>${year}</p>
    <p>Рейтинг: ${rating}</p>
  `;

  moviesList.appendChild(movieItem);
});

moviesList.addEventListener('click', (e) => {
  const targetEl = e.target;

  const itemMovieClicked = targetEl.parentElement.parentElement;

  if (itemMovieClicked) {
    console.log(itemMovieClicked);
    const movieName = itemMovieClicked.querySelector('h3').textContent;

    alert("Ви обрали фільм: " + movieName);
  }
})

// Розробіть програму для відображення списку користувачів з можливістю видалення окремих користувачів. Використовуйте делегування подій для обробки кліків на кнопках видалення, щоб зменшити кількість обробників подій та спростити код.

const userList = document.getElementById("userList");

const deleteUser = (event) => {
  if (event.target.nodeName !== 'BUTTON') return;

  userList.removeChild(event.target.parentElement);
}

userList.addEventListener("click", deleteUser);
