'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let x = [];
    let D = Math.sqrt (b**2 - 4*a*c);
    let xFirst = (-b + D)/2*a;
    let xSecond = (-b - D)/2*a;

    if (D > 0) {
        x.push(xFirst);
        x.push(xSecond); 
    } else if (D === 0) {
        x.push(xFirst);
    };

    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let marksList = marks;

    if (marksList.length > 5) {
        console.log('Вы пытаетесь вывести среднюю оценку из более чем пяти оценок. Учитываются только первые пять оценок.');
        marksList.splice(5);
    };

    let sum = 0;
    for (let i = 0; i < marksList.length; i++) {
        sum += marksList[i];
    };
    let averageMark = sum / marksList.length;
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    let todayYear = today.getFullYear();
    let birthYear = dateOfBirthday.getFullYear();
    let age = todayYear - birthYear;
    let result;

    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    };
    console.log(result)
    return result;
}