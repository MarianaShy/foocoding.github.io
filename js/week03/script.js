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
	return  a + b + c;
}
sumOfThree (1, 2, 3)

 //2

 function colorCar(color) {
	console.log('a ' + color + ' car');
 }
 colorCar("red");

 //3

 
