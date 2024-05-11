// 1

let bankAccount = {
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log("Гроші успішно додано до рахунку.");
    console.log("Поточний залишок на рахунку: " + this.balance);
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log("Гроші успішно знято з рахунку.");
      console.log("Поточний залишок на рахунку: " + this.balance);
    } else {
      console.log("Недостатньо коштів на рахунку для зняття.");
      console.log("Поточний залишок на рахунку: " + this.balance);
    }
  },
};

console.log("Початковий залишок на рахунку: " + bankAccount.balance);
bankAccount.deposit(500);
bankAccount.withdraw(200);

// 2

let weather = {
  temperature: prompt("Введіть температуру в градусах Цельсія", ""),
  humidity: 50,
  windSpeed: 10,

  isSmallThan0() {
    if (this.temperature < 0) {
      return true;
    } else {
      return false;
    }
  },
};

alert(
  weather.isSmallThan0() == true
    ? "Температура нижче, ніж 0 градусів Цельсія"
    : "Температура вище, ніж 0 градусів Цельсія"
);

// 3

let user = {
  name: "Капібара",
  email: "capybara@example.com",
  password: "chipi chipi chapa chapa dubi dubi daba daba",

  login() {
    let emailCheck = prompt("Логін:");
    let passwordCheck = prompt("Пароль:");
    if (emailCheck == this.email && passwordCheck == this.password) {
      return "Логін успішно виконано";
    } else {
      return "Логін не виконано";
    }
  },
};

alert(user.login());

// 4

let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  checkRating: function () {
    if (this.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
};

// Перевірка рейтингу фільму та виведення результату алертом
let isRatingAbove8 = movie.checkRating();
if (isRatingAbove8) {
  alert('Рейтинг фільму "' + movie.title + '" вище 8.');
} else {
  alert('Рейтинг фільму "' + movie.title + '" 8 або нижче.');
}
