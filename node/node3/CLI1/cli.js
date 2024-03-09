//import modules

const readline = require("readline");

const getAll =  require("./instructions.js")


// Display instructions on how to use each command

function instructions () {
	console.log("                    Commands:");
	console.log("To do list ----------------------- Display your To Do list;");
	console.log("post <task> ------------------ Create new To Do task;");
	console.log("change <id> <task> ----------- Change chosen task;");
	console.log("delete <id> ------------------ Delete chosen task;");
	
	console.log("end -------------------------- Quit the application;");
 }
 
 instructions();

// call readline
 const rl = readline.createInterface(
	{input: process.stdin, 
	output: process.stdout});


// Display prompt

rl.setPrompt("Your command: ");
rl.prompt();

//set functions to commands
rl.on("line", async function  (input) {
	if(input === "To do list"){
	const answer = await getAll()
	console.log(answer)
	}
	else
	console.log("no input")
}
 );



