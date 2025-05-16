// Завдання 1
function task1_sumFirst50NaturalNumbers() {
    let sum = 0;
    let i = 1;
    while (i <= 50) {
        sum += i;
        i++;
    }
    console.log("Завдання 1: Сума перших 50 натуральних чисел =", sum);
}

// Завдання 2
function task2_factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(`Завдання 2: Факторіал числа ${n} =`, result);
}

// Завдання 3
function task3_getMonthName(num) {
    let month;
    switch (num) {
        case 1: month = "Січень"; break;
        case 2: month = "Лютий"; break;
        case 3: month = "Березень"; break;
        case 4: month = "Квітень"; break;
        case 5: month = "Травень"; break;
        case 6: month = "Червень"; break;
        case 7: month = "Липень"; break;
        case 8: month = "Серпень"; break;
        case 9: month = "Вересень"; break;
        case 10: month = "Жовтень"; break;
        case 11: month = "Листопад"; break;
        case 12: month = "Грудень"; break;
        default: month = "Невірне число";
    }
    console.log(`Завдання 3: Місяць для числа ${num} =`, month);
}

// Завдання 4
function task4_sumEvenNumbers(arr) {
    const sum = arr.filter(x => x % 2 === 0).reduce((acc, val) => acc + val, 0);
    console.log("Завдання 4: Сума парних чисел у масиві =", sum);
}

// Завдання 5
const task5_countVowels = (str) => {
    const vowels = 'aeiouаеёиоуыэюяAEIOUАЕЁИОУЫЭЮЯ';
    const count = Array.from(str).filter(char => vowels.includes(char)).length;
    console.log("Завдання 5: Кількість голосних у рядку =", count);
};

// Завдання 6
function task6_power(base, exponent) {
    const result = Math.pow(base, exponent);
    console.log(`Завдання 6: ${base} у степені ${exponent} =`, result);
}

// Виклики функцій
task1_sumFirst50NaturalNumbers();
task2_factorial(5);
task3_getMonthName(4);
task4_sumEvenNumbers([1, 2, 3, 4, 5, 6]);
task5_countVowels("Привіт, як справи?");
task6_power(2, 3);

