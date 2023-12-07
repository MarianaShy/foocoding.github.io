//1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString = myString.replaceAll(",", " ");
console.log("My new string does not contain commas, I have replaced them with spaces: " + newString);

//2. Arrays!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log ("I added turtle to the end of ann Array: " + favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log ("I added meerkat to the 1 place of ann Array: blowfish,meerkat,capricorn,giraffe,turtle");
console.log (favoriteAnimals);
console.log ("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log (favoriteAnimals);
//favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"), 1);
console.log ('The item you are looking for is at index: '  + favoriteAnimals.indexOf("meerkat"));

//More JavaScript 
//1
function sumOfThree (a, b, c) {
	console.log(a + b + c);
}
sumOfThree (1, 2, 3)

 //2

 function colorCar(color) {
	console.log('a ' + color + ' car');
 }
 colorCar("red");

 /*3. Create an object and a function that takes the 
 object as a parameter and prints out all of its properties and values.*/

 function getTheObject(object) {
	console.log(object);
 }
 let myObject = {
	name: "Karl",
	day: "Friday"
 }
 getTheObject(myObject);


 /*4. Create a function named vehicleType that receives 
 a color, and a code, 1 for car, 2 for motorbike. And prints
  'a blue motorbike' for example when called as vehicleType("blue", 2) */ 

function vehicleType(color, code) {
	if (code === 1) return "motorbike"
	return "car";
	console.log("a " + color + code)
}

vehicleType("blue", 1)

/*5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
} */
(3===3) ? console.log("yes") : console.log("no");

