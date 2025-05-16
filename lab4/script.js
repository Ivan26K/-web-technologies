'use strict';

// Завдання 1
function showFruitsStrings(array) {
    console.log("Початковий масив:", array);
    array.pop();
    console.log("Після видалення останнього елемента:", array);
    array.unshift("ананас");
    console.log("Після додавання 'ананас' на початок:", array);
    array.sort((a, b) => b.localeCompare(a));
    console.log("Відсортований у зворотньому алфавітному порядку:", array);
    console.log("Індекс 'яблуко':", array.findIndex(f => f.toLowerCase() === "яблуко"));
}

// Завдання 2
function showColorsStrings(array) {
    console.log("Початковий масив:", array);
    let longest = array.reduce((a, b) => a.length > b.length ? a : b);
    let shortest = array.reduce((a, b) => a.length < b.length ? a : b);
    console.log("Найдовший елемент:", longest);
    console.log("Найкоротший елемент:", shortest);
    array = array.filter(color => color.toLowerCase().includes("синій"));
    console.log("Масив з 'синій':", array);
    console.log("Об'єднаний рядок:", array.join(", "));
}

// Завдання 3
function showEmployees(array) {
    array.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Відсортовано за іменем:", array);

    // Знайти розробників
    console.log("Розробники:", array.filter(e => e.position.toLowerCase() === "розробник"));

    // Фільтруємо працівників старше 30 років
    let olderThan30 = array.filter(e => e.age >= 30);
    console.log("Після видалення працівників молодших 30:", olderThan30);

    // Тепер додаємо нового працівника
    array.push({ name: "Арсеній", age: 19, position: "Алкоголік" });
    console.log("Після додавання нового працівника:", array);
}



// Завдання 4
function showStudents() {
    // 1. Створюємо масив студентів
    let students = [
        { name: "Іван", age: 18, course: 2 },
        { name: "Марія", age: 19, course: 2 },
        { name: "Петро", age: 18, course: 1 },
        { name: "Олексій", age: 20, course: 3 },
        { name: "Андрій", age: 19, course: 1 }
    ];

    console.log("Початковий масив студентів:", students);

    // 2. Видаляємо студента з ім'ям "Олексій"
    students = students.filter(s => s.name !== "Олексій");
    console.log("Після видалення 'Олексій':", students);

    // 3. Додаємо нового студента до масиву
    students.push({ name: "Арсеній", age: 19, course: 2 });
    console.log("Після додавання нового студента:", students);

    students.sort((a, b) => b.age - a.age);
    console.log("Відсортовано за віком:", students);

    // 4. Шукаємо студента на 3-му курсі
    const thirdCourseStudent = students.find(s => s.course === 3);
    console.log("Студент 3-го курсу:", thirdCourseStudent ? thirdCourseStudent.name : "Немає");

    // 5. НЕ СОРТУЄМО МАСИВ ПІСЛЯ ДОДАВАННЯ - він залишається в початковому порядку

    // 6. Сортуємо студентів за віком тільки в кінці

}




// Завдання 5
function showNumsArray(array) {
    console.log("Початковий масив:", array);

    // 1. Підносимо числа до квадрату
    const squares = array.map(n => n ** 2);
    console.log("Квадрати чисел:", squares);

    // 2. Отримуємо лише парні числа
    const evenNumbers = array.filter(n => n % 2 === 0);
    console.log("Парні числа:", evenNumbers);

    // 3. Знаходимо суму чисел
    const sum = array.reduce((acc, n) => acc + n, 0);
    console.log("Сума чисел:", sum);

    // 4. Створюємо новий масив з додатковими числами
    const extendedArray = array.concat([11, 22, 33, 44, 55]);
    console.log("Після додавання нових чисел:", extendedArray);

    // 5. Видаляємо перші 3 елементи
    extendedArray.splice(0, 3);
    console.log("Після видалення перших 3 елементів:", extendedArray);
}


// Завдання 6
function libraryManagement() {
    // Початковий масив книг
    let library = [
        { title: "Книга 1", author: "Автор 1", genre: "Фантастика", pages: 300, isAvailable: true },
        { title: "Книга 2", author: "Автор 2", genre: "Детектив", pages: 250, isAvailable: false }
    ];

    // Додавання нової книги
    function addBook(title, author, genre, pages) {
        library.push({ title, author, genre, pages, isAvailable: true });
    }

    // Видалення книги за назвою
    function removeBook(title) {
        library = library.filter(book => book.title !== title);
    }

    // Пошук книг за автором
    function findBooksByAuthor(author) {
        return library.filter(book => book.author === author);
    }

    // Позначення книги як взятої або повернутої
    function toggleBookAvailability(title, isBorrowed) {
        const book = library.find(b => b.title === title);
        if (book) book.isAvailable = !isBorrowed;
    }

    // Сортування книг за кількістю сторінок
    function sortBooksByPages() {
        library.sort((a, b) => a.pages - b.pages);
    }

    // Зведення статистики
    function getBooksStatistics() {
        const total = library.length;
        const available = library.filter(b => b.isAvailable).length;
        const taken = total - available;
        const avgPages = total ? library.reduce((sum, b) => sum + b.pages, 0) / total : 0;
        return { total, available, taken, avgPages };
    }

    // Тестування функцій
    addBook("Книга 3", "Автор 3", "Роман", 200);
    removeBook("Книга 1");
    console.log("Книги автора Автор 3:", findBooksByAuthor("Автор 3"));
    toggleBookAvailability("Книга 2", true);
    sortBooksByPages();
    console.log("Відсортовані книги:", library);
    console.log("Статистика:", getBooksStatistics());
}

// Виклик функції для перевірки результату
libraryManagement();


// Завдання 7
function task7() {
    // Створюємо об'єкт студента з даними
    let student = {
        name: "Іван",
        age: 21,
        course: 3
    };

    // Додаємо нову властивість "subjects", яка містить список предметів студента
    student.subjects = ["Математика", "Фізика", "Програмування"];

    // Видаляємо властивість "age" з об'єкта студента
    delete student.age;

    // Виводимо оновлений об'єкт студента в консоль
    console.log("Оновлений об'єкт студента:", student);
}

// Викликаємо функцію для перевірки
task7();


// Прив’язка кнопок
const task1Btn = document.getElementById('task1Btn');
const task2Btn = document.getElementById('task2Btn');
const task3Btn = document.getElementById('task3Btn');
const task4Btn = document.getElementById('task4Btn');
const task5Btn = document.getElementById('task5Btn');
const task6Btn = document.getElementById('task6Btn');
const task7Btn = document.getElementById('task7Btn');

let fruitsArray = ["Апельсин", "Банан", "Яблуко", "Груша"];
let colorsArray = ["Червоний", "Синій", "Оранжевий", "Жовтий", "Зелений", "Синій"];
let employees = [
    { name: "Іван", age: 28, position: "Менеджер" },
    { name: "Марія", age: 34, position: "HR-менеджер" },
    { name: "Петро", age: 40, position: "Розробник" },
    { name: "Оксана", age: 25, position: "Дизайнер" },
    { name: "Андрій", age: 30, position: "Розробник" }
];
let students = [
    { name: "Іван", age: 18, course: 2 },
    { name: "Марія", age: 19, course: 2 },
    { name: "Петро", age: 18, course: 1 },
    { name: "Олексій", age: 20, course: 3 },
    { name: "Андрій", age: 19, course: 1 }
];
let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

task1Btn.addEventListener('click', () => showFruitsStrings([...fruitsArray]));
task2Btn.addEventListener('click', () => showColorsStrings([...colorsArray]));
task3Btn.addEventListener('click', () => showEmployees([...employees]));
task4Btn.addEventListener('click', () => showStudents([...students]));
task5Btn.addEventListener('click', () => showNumsArray([...numsArray]));
task6Btn.addEventListener('click', () => libraryManagement());
task7Btn.addEventListener('click', () => task7());
