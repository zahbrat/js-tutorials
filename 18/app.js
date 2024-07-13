// Завдання 1

const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Категорія: ${title}\nКількість елементів: ${itemsCount}`);
});

// Завдання 2

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientItems = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...ingredientItems);

// Завдання 3

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('#gallery');

const galleryItems = images.map(({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width="200"></li>`;
}).join('');

galleryList.insertAdjacentHTML('beforeend', galleryItems);

// Завдання 4

let counterValue = 0;

const counter = document.querySelector('#counter');
const valueSpan = counter.querySelector('#value');
const incrementBtn = counter.querySelector('button[data-action="increment"]');
const decrementBtn = counter.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
