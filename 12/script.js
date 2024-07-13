// Завдання 1
const user = {
    name: 'John',
    age: 30,
    hobby: 'reading',
    premium: true,
};

// Додаємо поле mood
user.mood = 'happy';

// Замінюємо значення hobby
user.hobby = 'skydiving';

// Замінюємо значення premium
user.premium = false;

// Виводимо вміст об'єкта user в форматі ключ:значення
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// Завдання 2
function countProps(obj) {
    return Object.keys(obj).length;
}

// Перевірка функції
console.log(countProps(user)); // Виведе кількість властивостей об'єкта user

// Завдання 3
function findBestEmployee(employees) {
    let bestEmployee = '';
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
}

// Перевірка функції
const employees = {
    John: 29,
    Ann: 35,
    Pete: 28,
    Mary: 40
};

console.log(findBestEmployee(employees)); // Виведе 'Mary'

// Завдання 4
function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
}

// Перевірка функції
const salaries = {
    John: 1000,
    Ann: 1500,
    Pete: 1200,
    Mary: 1300
};

console.log(countTotalSalary(salaries)); // Виведе 5000

// Завдання 5
function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            propValues.push(obj[prop]);
        }
    }

    return propValues;
}

// Перевірка функції
const products = [
    { name: 'Apple', price: 100, quantity: 10 },
    { name: 'Banana', price: 60, quantity: 20 },
    { name: 'Orange', price: 80, quantity: 30 }
];

console.log(getAllPropValues(products, 'name')); // Виведе ['Apple', 'Banana', 'Orange']
console.log(getAllPropValues(products, 'quantity')); // Виведе [10, 20, 30]

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    }

    return totalPrice;
}

// Перевірка функції
const allProducts = [
    { name: 'Apple', price: 100, quantity: 10 },
    { name: 'Banana', price: 60, quantity: 20 },
    { name: 'Orange', price: 80, quantity: 30 },
    { name: 'Apple', price: 100, quantity: 5 }
];

console.log(calculateTotalPrice(allProducts, 'Apple')); // Виведе 1500
console.log(calculateTotalPrice(allProducts, 'Banana')); // Виведе 1200

// Завдання 7 — додаткове, виконувати не обов'язково
const account = {
    balance: 0,
    transactions: [],

    deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: 'deposit', amount });
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Недостатньо коштів для зняття.');
            return;
        }
        this.balance -= amount;
        this.transactions.push({ type: 'withdraw', amount });
    },

    getBalance() {
        return this.balance;
    },

    getTransactionHistory() {
        return this.transactions;
    }
};

// Перевірка функцій
account.deposit(1000);
account.withdraw(500);
account.deposit(200);
account.withdraw(800); // Виведе 'Недостатньо коштів для зняття.'

console.log(account.getBalance()); // Виведе 700
console.log(account.getTransactionHistory());
// Виведе історію транзакцій
// [ { type: 'deposit', amount: 1000 },
//   { type: 'withdraw', amount: 500 },
//   { type: 'deposit', amount: 200 } ]
