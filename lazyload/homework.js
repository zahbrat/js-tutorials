document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy-image");

  // IntersectionObserver для лінійного завантаження зображень
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src"); // Завантаження зображення
          img.onload = () => img.classList.add("loaded"); // Додавання класу після завантаження
          observer.unobserve(img); // Перестаємо спостерігати за цим зображенням
        }
      });
    },
    {
      rootMargin: "0px 0px 200px 0px", // Почати завантаження трохи раніше
      threshold: 0.1,
    }
  );

  // Спостереження за кожним зображенням з атрибутом data-src
  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
});
