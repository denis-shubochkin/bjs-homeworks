"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = parseInt(percent);
    contribution = parseInt(contribution);
    amount = parseInt(amount);
    if (isNaN(parseInt(percent)+1))
    {
        alert('Проценты должны быть числом');
        return;
    }
    if (isNaN(parseInt(contribution)+1))
    {
        alert('Первоначальный взнос должен быть числом');
        return;
    }
    if (isNaN(parseInt(amount)+1))
    {
        alert('Сумма кредита должна быть числом');
        return;
    }


    function monthDiff(date, curDate) {
        let m;
        m = (date.getFullYear() - curDate.getFullYear()) * 12;
        return m;
    }
    let percentRes = (percent/100)/12;
    let restAmount = amount - contribution;
    let dateTo = new Date(date);
    let now = new Date();
    let months = monthDiff(dateTo,now);
    if (months === 0) {
        alert('Срок кредита не может составлять меньше года');
        return;
    }
    let payMonth = restAmount*(percentRes+percentRes/((Math.pow(1+percentRes,months)-1)));
    let totalAmount = payMonth*months;
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == "" || name == 'undefined' || name == 'null') {
        name = 'Аноним';
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}