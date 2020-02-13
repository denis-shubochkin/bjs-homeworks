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
        sleep(500); // Можно использовать другое значение замедления.        
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
        let result = fn(...args);
        if(results.length>0) 
          {
            if(results.find(check_elem) == undefined)
                {
                results.push({
                mass_sum,
                result 
                })
                }
          }
        else 
          {
              results.push({
              mass_sum,
              result 
              })
          }
      
      if (results.length>limit) 
      {
        results.shift();
      }
      console.log(results);
      return result  ;
    }
  }
  

    



    const mSum = memorize(sum, 5);
    // console.log(mSum(3,4,6));
    // console.log(mSum(1, 2));
    // console.log(mSum(1, 2));
    mSum(3,4);
    mSum(1, 2);
    mSum(1, 2);
    mSum(2, 3);
    mSum(4, 5);
    mSum(4, 4);
    mSum(4, 8);
    mSum(4, 1);

    
  
  
    
