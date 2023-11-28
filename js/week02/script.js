//1
console.log("Hello, World!") //English
console.log("Hej, Världen!") //Swedish
console.log("Привіт, Світ!") //Ukrainian
console.log("Привет, Mир!") //Russian


//2
console.log("I'm awesome");


//3
let x
console.log("the value of my variable x will be: undefined")
console.log(x)
x = 30
console.log("the value of my variable x will be: 30")
console.log(x)


//4
let y = ""
console.log("the value of x will be empty")
console.log(y)
y = "Hello World!"
console.log("the value of x will be: 'Hello World!'")
console.log(y)


//5
const z = 7.25
console.log(z)
const a = Math.round(z)
console.log(a)
const f = Math.max(a, z)
console.log(f)


//6
let dogNames = []
console.log("I think the value of the array is: undefined")
console.log(dogNames)
let myFavoriteAnimals = ["dog", "horse", "cat"]
console.log(myFavoriteAnimals)
myFavoriteAnimals.push ("baby pig")
console.log(myFavoriteAnimals)


//7
let myString = "this is a test"
console.log(myString)
let myStringLength = myString.length
console.log(myStringLength)


//8
let day = "Monday";
console.log("The value of my variable day is: " + day);
let date = 27;
console.log("The value of my variable date is: " + date);
let itIsSnowing = true
console.log("The value of my variable itIsSnowing is: " + itIsSnowing);
let temperature = 4;
console.log("The value of my variable temperature is: " + temperature);
let nothing;
console.log("The value of my variable nothing is: " + nothing);

console.log("The type of my variable day is: string")
console.log("The type of my variable date is: number")
console.log("The type of my variable itIsSnowing is: boolean")
console.log("The type of my variable temperature is: number")
console.log("The type of my variable nothing is: undefined")

console.log(typeof day)
console.log(typeof date)
console.log(typeof itIsSnowing)
console.log(typeof temperature)
console.log(typeof nothing)


if (typeof day === typeof date) {
    console.log('SAME TYPE');
}
else {
  console.log('NOT THE SAME TYPE')
}
if (typeof date === typeof temperature) {
    console.log('SAME TYPE');
}
else {
  console.log('NOT THE SAME TYPE')
}


//9
console.log("If x equals 7, and the only other statement is x = x % 3, than x = 1")
console.log("If x equals 8, and the only other statement is x = x % 3, than x = 2")
console.log("If x equals 9, and the only other statement is x = x % 3, than x = 0")


//10
let myArray = ["John", 28]
if (typeof myArray[0] !== typeof myArray[1])  {
  console.log("This array contains multiple data types.")
}
else{
  console.log("This array does not contain multiple data types.")
}
console.log("You can store multiple data types in an array? Numbers and strings like in this example?")

let g = 6/0
let h = 10/0
console.log(g)
console.log(h)
if (g === h){
  console.log("true")
}
else{
  console.log("false")
}
console.log("You can compare infinities. Eny numbers divided to 0 will be equal Infinity")
