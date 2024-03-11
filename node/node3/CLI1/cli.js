//-------------------set up the application -------------------------------


//import modules

const readline = require("readline");

const commandsController =  require("./controller")


// Display instructions on how to use each command

function instructions () {
	console.log("                    Commands:");
	console.log("list ------------------------- Display your To Do list;");
	console.log("post <task> ------------------ Create new To Do task;");
	console.log("change <task> <id>  ----------- Change chosen task;");
	console.log("delete <id> ------------------ Delete chosen task;");
	console.log("commands --------------------- Show all commands;");
	console.log("end -------------------------- Quit the application;");
 }
 

// call readline
 const rl = readline.createInterface(
	{input: process.stdin, 
	output: process.stdout});



rl.setPrompt("Your command: ");
rl.prompt();




//set functions to commands
rl.on("line", (input) => {
	let [command, ...arguments] = input.trim().split(" ");
	command = command.toUpperCase()
	




//try with text, id
	try{
		if (command === "END") process.exit(0)
		else if (command === "COMMANDS") instructions()
		else {	
			commandsController(command, arguments)
			console.log(input)
		}
	}
	catch(error){
		console.error(error);
	}
} );



module.exports = instructions;