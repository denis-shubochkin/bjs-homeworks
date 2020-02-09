//Задание 1
console.log('Задание 1');
function getSolutions(a,b,c) {
    let D = Math.pow(b,2) - 4*a*c;
    let result = new Object();
    if (D<0) {
      result.D = D;
      result.roots = [];
    }
    else if (D===0) {
      let x1 = -b / (2*a);
      result.roots = [x1];
      result.D = D;
    }
    else if (D>0) {
      x1 = (-b + Math.sqrt(D)) / (2*a);
      x2 = (-b - Math.sqrt(D)) / (2*a);
      result.roots = [x1,x2];
      result.D = D;
    }
  
    return result;
  }
  
  function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    switch (result.roots.length) {
      case 1: console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
      break;
      case 2: console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
      break;
      default: console.log('Уравнение не имеет вещественных корней');
    }
  }
  
  showSolutionsMessage(1,2,3);
  showSolutionsMessage(7,20,-3);
  showSolutionsMessage(2,4,2);

  // Задание 2
  console.log('Задание 2');
  let student = {
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4]
}

function getAvgPerDiscipline(data) {
    for (let prop in data) {
    let sum = 0;
    for (let i=0;i<data[prop].length;i++)
    { sum += data[prop][i];
    }
    data[prop] = sum/data[prop].length;
}
return data;
}

let studentAvg = getAvgPerDiscipline(student);

 
  function getAverageScore(studentAvgC) {
      let sum = 0;
      let countDiscl = Object.keys(studentAvgC).length;
    for (let prop in studentAvgC) {
    sum += getAvgPerDiscipline(studentAvgC[prop]);
    }
    studentAvgC.average = sum/countDiscl;    
    return studentAvgC; 
  } 

  console.log(getAverageScore(studentAvg));

  

  // Задание 3
  console.log('Задание 3');
  function getName(code) {
    let resultName;
    if(code===0) resultName = 'Родриго'
    else if (code===1) resultName = 'Эмилио';
    else resultName = 'Неизвестно';
    return resultName;
}

let pirateOne = {
    firstName: getName(0),
    lastName: getName(0)
}
let pirateTwo = {
    firstName: getName(0),
    lastName: getName(1)
}
let pirateThree = {
    firstName: getName(1),
    lastName: getName(1)
}
let pirateFour = {
    firstName: getName(1),
    lastName: getName(0)
}

  function getPersonData( secretData ) {
    console.log('firstName: '+ secretData.firstName);
    console.log('lastName: '+ secretData.lastName);
}

getPersonData(pirateOne);
getPersonData(pirateTwo);
getPersonData(pirateThree);
getPersonData(pirateFour);  


