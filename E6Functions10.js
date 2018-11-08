//Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};


const half = (function() {
  "use strict"; // do not change this line
  	return function half({max, min}) {
    	return (stats.max + stats.min) / 2.0;
  		};
	})();


	
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015