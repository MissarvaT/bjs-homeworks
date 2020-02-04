'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
};

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (percent == NaN || percent == undefined) {
        return `Параметр \"Проценты" содержит неправильное значение ${percent}.`;
    } else if (contribution == NaN || contribution == undefined) {
       return `Параметр \"Сумма первоначального взноса" содержит неправильное значение ${contribution}.`;
    } else if (amount == NaN || amount == undefined) {
       return `Параметр \"Сумма кредита" содержит неправильное значение ${amount}.`;
    } else if (date == NaN || date == undefined) {
        return `Параметр \"Сумма кредита" содержит неправильное значение ${amount}.`;
    };    

    let end = new Date(date);
    let today = new Date();
    let timeDifference = end.getTime() - today.getTime();
    let term = Math.ceil(timeDifference/(24*3600*1000)/30);
    console.log(term);

    let percentForCalculation = percent/100;

     let returnSum = amount - contribution;
     let p = (1/12)*percentForCalculation;
     let monthlyPayment = amount*(p + p/(((1 + p)**term) - 1));
     let totalAmount = contribution + term*monthlyPayment;

     console.log(totalAmount);
     return totalAmount;
};

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == null || name == undefined || name == "") {
        name = 'Аноним'
    };
    let greeting = `Привет, Мир! Меня зовут ${name}.` 
    
    
    console.log(name);
    console.log(greeting);
    return greeting;
}