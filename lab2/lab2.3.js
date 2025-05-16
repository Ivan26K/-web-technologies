function getGrade(score) {
    if (score >= 90) {
        return "Відмінно";
    } else if (score >= 75) {
        return "Добре";
    } else if (score >= 50) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}


function getSeasonIf(month) {
    if (month === 12 || month === 1 || month === 2) {
        return "Зима";
    } else if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Літо";
    } else if (month >= 9 && month <= 11) {
        return "Осінь";
    } else {
        return "Некоректний місяць";
    }
}

// 2. Визначення сезону за місяцем (за допомогою тернарного оператора ?)
function getSeasonTernary(month) {
    return (month === 12 || month === 1 || month === 2) ? "Зима" :
        (month >= 3 && month <= 5) ? "Весна" :
            (month >= 6 && month <= 8) ? "Літо" :
                (month >= 9 && month <= 11) ? "Осінь" : "Некоректний місяць";
}


const score = 85;
console.log(`Оцінка студента: ${getGrade(score)}`);

const monthIf = 4;
console.log(`Місяць ${monthIf} - це: ${getSeasonIf(monthIf)}`);

const monthTernary = 10;
console.log(`Місяць ${monthTernary} - це: ${getSeasonTernary(monthTernary)}`);
