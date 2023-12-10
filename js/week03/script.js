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
	(code === 1) ? code = "motorbike" : code = "car";
	console.log("a " + color + " " + code)
}

vehicleType("blue", 1)

/*5. Can you write the following without the if statement,
 but with just as a single line with console.log(...);?
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
} */
let one = (3===3) ? console.log("yes") : console.log("no");

/*6. Create a function called vehicle, like before, 
but takes another parameter called age, so that
 vehicle("blue", 1, 5) prints 'a blue used car' */

 function vehicle(color, code, age) {
	if (code === 1) { code = "motorbike"} 
  else if (code === 2) {code = "car"}
  (age === 0) ? age = "new" : age = "used"
	console.log(`a ${color} ${age} ${code}`)
}
vehicle("blue", 1, 5)

/*7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.*/
let vehicles = ['motorbike', 'caravan', 'bike']
//8.
console.log(vehicles[2])
//9.
function vehicle(color, code, age) {
	const vehicles = ['motorbike', 'caravan', 'bike'];
	const vehicleType = vehicles[code - 1];
	if (code === 1) { code = "motorbike"} 
	else if (code === 2) {code = "car"}
	(age <= 3) ? age = "new" : age = "used"
	console.log("a " + color + " " + age + " " + vehicleType)
}
vehicle("green", 3, 1)

//10
function vehicleAdMessage(){
	let addverticementMassage = "Amazing Joe's Garage, we service"
	const vehicles = ['motorbike', 'caravan', 'bike', 'plane'];
	for(let i=0; i < vehicles.length; i++){
	  if( i === vehicles.length - 1) {
		 addverticementMassage += ' and ' + vehicles[i] + 's'
	  }
	  else if (i === vehicles.length - vehicles.length){
		 addverticementMassage += ' ' + vehicles[i] + 's'}
	  else {
	  addverticementMassage += ', ' + vehicles[i] + 's.'}
	  }
	  console.log(addverticementMassage)
	  }
 vehicleAdMessage()

 //11
 console.log("I can add more vehicle to the list without changing the code for question 10")
 let vehicles11 = ['motorbike', 'caravan', 'bike', 'plane'];
function vehicleAdMessage11(h){
	let addverticementMassage = "Amazing Joe's Garage, we service"

	for(let i=0; i < h.length; i++){
	  if( i === h.length - 1) {
		 addverticementMassage += ' and ' + h[i] + 's'
	  }
	  else if (i === h.length - h.length){
		 addverticementMassage += ' ' + h[i] + 's'}
	  else {
	  addverticementMassage += ', ' + h[i] + 's.'}
	  }
	  console.log(addverticementMassage)
	  }
 vehicleAdMessage11(vehicles11)

 //12
 let newObject = {};

 //13
 let teachers = {
	'module1': 
	{name: 'Timmy'},
	'module2':
	{name: 'Seif'},
	'module3': 
	{name: 'Sahin'}
};
//14
teachers.module1['language'] = 'HTML/CSS/Git';
teachers.module2['language'] = 'CSS';
teachers.module3['language'] = 'JS';
console.log(teachers)
//15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

(z == y) ? console.log(true) : console.log(false);
(z === y) ? console.log(true) : console.log(false);
console.log('Output is true');
(x == y) ? console.log(true) : console.log(false);
(x === y) ? console.log(true) : console.log(false);
console.log('Output is false');

//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
o2['foo'] = "goo";
console.log(o2);
console.log(o3);
console.log("changing o2 changes o3");
o1['foo'] = "boo";
console.log(o1);
console.log(o2);
consol.log('changing o1 does not change o2');

//17

let bar = 42;
typeof typeof bar;
console.log('typeof bar returns "number" which is a string itself. Thats why typeof typeof bar is a string');

