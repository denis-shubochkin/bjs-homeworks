"use strict";

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
    let discr = Math.pow(b,2) - 4*a*c;
    let result = [];
    if (discr===0) {
        result[0] = -(b/(2*a))
    }
    else if (discr > 0) {
        result[0] = (-b - Math.sqrt(discr))/(2*a);
        result[1] = (-b + Math.sqrt(discr))/(2*a);
    }
    else result = 'empty';
    return result;
}


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
    let emptyElements = 0;
    let averageMark = 0;
      if (marks.length > 5) {
        alert('Оценок больше 5');
        marks = marks.slice(0,4);
    }
    for (let i=0; i < marks.length; i++) {
        if(marks[i] > 0)
      sum += marks[i];
        else emptyElements++;
    }
    averageMark = sum/(marks.length-emptyElements);
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let result;
    let today = new Date();
    let yearDiff = today.getFullYear() - dateOfBirthday.getFullYear();
    if (yearDiff < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    console.log(result)
    return result;
}