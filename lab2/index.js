function findMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Некорректний ввід: очікується непустий масив чисел");
    }
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

function compareObjects(obj1, obj2, properties) {
    if (!properties || properties.length === 0) {
        throw new Error("Не вказані властивості для порівняння");
    }
    return properties.every(prop => obj1[prop] === obj2[prop]);
}

const numbers = [3, 1, 7, 9, 4];
const resultMinMax = findMinMax(numbers);
console.log(`Результат пошуку мінімального та максимального елемента:`);
console.log(`Мінімум: ${resultMinMax.min}, Максимум: ${resultMinMax.max}\n`);

const objA = { name: "Alice", age: 25, city: "NY" };
const objB = { name: "Alice", age: 25, city: "LA" };

const comparison1 = compareObjects(objA, objB, ["name", "age"]);
console.log(`Результат порівняння об'єктів за властивостями "name" та "age": ${comparison1 ? "Однакові" : "Різні"}\n`);

const comparison2 = compareObjects(objA, objB, ["name", "city"]);
console.log(`Результат порівняння об'єктів за властивостями "name" та "city": ${comparison2 ? "Однакові" : "Різні"}`);