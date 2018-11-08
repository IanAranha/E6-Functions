//Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.


//In E6, if one of the arguments is not passed into the function, we can define a default value.


//in this case, default value is 1.


const increment = (function() 
{
  "use strict";
  return function increment(number, value = 1)
  {
    return number + value;
  };
})();

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6


