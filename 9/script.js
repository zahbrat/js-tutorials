// Завдання 1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

// Приклад використання:
logItems(['Mango', 'Poly', 'Ajax']);

// Завдання 2
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}

// Приклад використання:
console.log(calculateEngravingPrice("Hello world", 10));

// Завдання 3
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Приклад використання:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Завдання 4
function formatString(string) {
    if (string.length > 40) {
        return string.slice(0, 40) + '...';
    }
    return string;
}

// Приклад використання:
console.log(formatString("This is a very long string that needs to be shortened."));
console.log(formatString("Short string."));

// Завдання 5
function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// Приклад використання:
console.log(checkForSpam("This is a SPAM message."));
console.log(checkForSpam("This is a regular message."));

// Завдання 6
let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число:");
    if (input === null) {
        break;
    }
    
    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Було введено не число, спробуйте ще раз');
        continue;
    }

    numbers.push(input);
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}

// Завдання 7 — додаткове
const logins = ['user1', 'user2', 'user3'];

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!';
    }
    allLogins.push(login);
    return 'Логін успішно доданий!';
}

// Приклад використання:
console.log(addLogin(logins, 'new_user'));
console.log(addLogin(logins, 'user1'));
console.log(addLogin(logins, 'lo'));
console.log(addLogin(logins, 'this_is_a_very_long_login'));
console.log(addLogin(logins, 'valid_user'));
