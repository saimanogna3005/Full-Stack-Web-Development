function sum(a){
  return function (b)
  {
     return function(c)
     {
        console.log(a+b+c)
     }
  }
} 
sum(10)(20)(30);