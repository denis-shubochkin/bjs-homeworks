function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

  function compareArrays (arr1, arr2) {
    if(arr1.length != arr2.length)
      {
        return false;
      }
    else   
      {
        return arr1.every((a,item)=> {
        return a === arr2[item];})
      }
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
    return function() 
    {
        if (results.length===limit) 
          {
            results.shift();
          }
        function check_elem(elem) 
          {
          if(compareArrays(elem.mass_sum,temp_obj.args) === true) 
          return 1;
          }
        let mass_sum = Array.from(arguments);
        let temp_obj = 
            {
            args: mass_sum,
            res: fn
            }
        if(results.length>0) 
          {
            if(results.find(check_elem) == undefined)
                {
                results.push({
                mass_sum,
                fn
                })
                }
          }
        else 
          {
              results.push({
              mass_sum,
              fn
              })
          }
      console.log(results);
      return fn;
    }
  }
  

    



    const mSum = memorize(sum, 5);
     mSum(3,4,6);
      mSum(1, 2);
      mSum(1, 2);
      mSum(5, 5);
      mSum(3, 4);
       mSum(5, 6);
       mSum(6, 6);
       mSum(7, 7,9);
    
  
  
    
