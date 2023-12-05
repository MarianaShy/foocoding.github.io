//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString = myString.replaceAll(",", " ");
console.log("My new string does not contain commas, I have replaced them with spaces: " + newString);