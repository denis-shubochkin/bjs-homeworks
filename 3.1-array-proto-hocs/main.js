function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

  function compareArrays (arr1, arr2) {
        return ((arr1.length === arr2.length) && arr1.every((a,item)=>  a === arr2[item]));
    }

    function sum(...args) {
      // Замедление на половину секунды.
      //  sleep(200); // Можно использовать другое значение замедления.        
        return args.reduce((sum, arg) => {        
        return sum += +arg;
        }, 0);
    }
  
 
     
  function memorize(fn, limit) 
  {
    let results = [];
    return function t(...args) 
    {
       
        function check_elem(elem) 
          {
          if(compareArrays(elem.mass_sum,mass_sum) === true) 
          return elem;
          }
        let mass_sum = Array.from(arguments);
        let result = 0;
        if(results.length>0) 
          {
            if(results.find(check_elem) == undefined)
                {
                result = fn(...args);
                results.push({
                mass_sum,
                result 
                })
                }
          }
        else 
          {
              result = fn(...args);
              results.push({
              mass_sum,
              result 
              })
          }
      
      if (results.length>limit) 
      {
        results.shift();
      }
      //console.log(results);
      return result  ;
    }
  }
  
function testCase (testFunction, timer) {
  let testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(timer);
  for (let i=0;i<100;i++){
    testArray.forEach((...testArray) => testFunction(...testArray));
    if(i===99) console.timeEnd(timer);
  }
}
const mSum = memorize(sum, 5);
testCase(sum,'Проверка функции sum');
//Проверка функции sum: 100500.2392578125ms
//Без задержки:
//Проверка функции sum: 3.179931640625ms

testCase(mSum,'Проверка оптимизированной версии');
//Проверка оптимизированной версии: 1006.556884765625ms
//Без задержки:
//Проверка оптимизированной версии: 2.642822265625ms






    
  
  
    
