function isInRange(number, min, max) {
    return number >= min && number <= max;
}

function toggleBoolean(value) {
    return !value;
}

console.log("=== Перевірка числа в діапазоні ===");
console.log("Число 5 в діапазоні [1, 10]:", isInRange(5, 1, 10));
console.log("Число 15 в діапазоні [1, 10]:", isInRange(15, 1, 10));

console.log("\n=== Інверсія булевої змінної ===");
let flag = true;
console.log("Початкове значення:", flag);
flag = toggleBoolean(flag);
console.log("Після інверсії:", flag);
