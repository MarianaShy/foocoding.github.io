
"use strict"
// Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.

const doubleOddNumbers = (numbers) => {
	const newNumbers = numbers.filter((number) => number % 2 !== 0).map((number) => number * 2);
	return newNumbers;
  }

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

