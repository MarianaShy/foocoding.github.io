//import modules

const readline = require("readline");

const getAll =  require("./instructions.js")


// Display instructions on how to use each command

function instructions () {
	console.log("                    Commands:");
	console.log("getAll ----------------------- Display your To Do list;");
	console.log("post <task> ------------------ Create new To Do task;");
	console.log("change <id> <task> ----------- Change chosen task;");
	console.log("delete <id> ------------------ Delete chosen task;");
	console.log("end -------------------------- Quit the application;");
 }
 
 instructions();

// call readline
 var rl = readline.createInterface(process.stdin, process.stdout);


// Display a prompt to the user

rl.setPrompt("Your command: ");
rl.prompt();


async function test() {
	const testInst = await getAll()
console.log(testInst)}

test()
