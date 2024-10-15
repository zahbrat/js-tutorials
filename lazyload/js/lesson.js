// ! Використовуєм Intersection observer для завантаження картинок

const callback = (entries, observer) => {
  console.log("entries", entries); // Масив з обєктами параметрів
  console.log("observer", observer); // Параметри глядача

  entries.forEach((entry) => {
    console.log("entry", entry); // обʼєкт парамертів з якого ми будемо перевіряти чи відбувся перетин з елементом за яким ми спостерігаємо

    if (entry.isIntersecting) {
      // entry.isIntersecting властивість є булевою і вказує, чи перетинається спостережуваний елемент з областю видимості (viewport) або з кореневим елементом (root) в даний момент

      // дозволяє визначити чи елемент є видими в даний момент і виконати відповідні дії в залежності від його видимості
      console.log("element vidimiy");

      entry.target.src = entry.target.dataset.src;
    }
  });
};

const options = {
  threshold: 0.7, // Наскільки елемент повинен бути видимим щоб спрацював обзервер. Значення від 0 до 1
};

const imageObserver = new IntersectionObserver(callback, options);

document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img);
});

//? Основні методи Intersection Observer API
// observe(): Починає спостереження за заданим елементом.
// unobserve(): Припиняє спостереження за заданим елементом.
// disconnect(): Припиняє спостереження за всіма елементами.

// setTimeout(() => {
//     imageObserver.disconnect()
//     console.log('imgobserver stoped')
// }, 10000)

const callbackVideo = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target !== 0) {
      if (entry.isIntersecting || entry.IntersectionRatio <= 0.2)
        entry.target.play(); // Робить паузу
      else {
        entry.target.pause(); // Робить відновлення
      }
    }
  });
};

const videoObserver = new IntersectionObserver(callbackVideo, {
  rootMargin: "20px",
  threshold: 0.5,
});

videoObserver.observe(document.querySelector("video"));

// ? Приклад до якірних меню
const sections = document.querySelectorAll(".section");

const links = document.querySelectorAll(".menu-item");

const callbackMenu = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      console.log("не в області видимотсті");
      links.forEach((link) => link.classList.remove("active"));
      const activeID = entry.target.id;

      const activeLink = document.querySelector(
        `.menu-item[href="#${activeID}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

const sectionObserver = new IntersectionObserver(callbackMenu, {
  threshold: [0.5],
});

sections.forEach((section) => sectionObserver.observe(section));

sections.forEach((section) => sectionObserver.observe(section));

// Задачі

// #1
// Виконати наступне завдання для зміни стилів при прокрутці списку
//Створіть HTML-сторінку, що містить список з 10 елементів li. Кожен елемент li містить картинку та назву фрукту.

const fruitObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fruit-visible");
      } else {
        entry.target.classList.remove("fruit-visible");
      }
    });
  },
  { threshold: 1 }
);

const fruitList = document.querySelectorAll(".fruits-list li");

fruitList.forEach((el) => {
  fruitObserver.observe(el);
});

// #2
// Напишіть код для лінивого завантаження зображень на сторінці з використанням IntersectionObserver. Кожне зображення повинно бути видимим лише коли користувач дійсно дивиться на нього, тобто коли його видимість досягає порогового значення 0.5.
// Створити HTML розмітку, яка містить зображення, які потрібно ліниво завантажити. Для кожного зображення потрібно вказати два атрибути: src з посиланням на пусту картинку (placeholder) та data-src з посиланням на фактичне зображення.

const imageObserver2 = new IntersectionObserver(entries => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
    }
  });
}, { threshold : 0.5});

imageObserver2.observe(document.querySelectorAll(".task-2"));
