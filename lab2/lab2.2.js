function isInRange(number, min, max) {
    return number >= min && number <= max;
}

function toggleBoolean(value) {
    return !value;
}

console.log("=== Проверка числа в диапазоне ===");
console.log("Число 5 в диапазоне [1, 10]:", isInRange(5, 1, 10));
console.log("Число 15 в диапазоне [1, 10]:", isInRange(15, 1, 10));

console.log("\n=== Инверсия булевой переменной ===");
let flag = true;
console.log("Исходное значение:", flag);
flag = toggleBoolean(flag);
console.log("После инверсии:", flag);
