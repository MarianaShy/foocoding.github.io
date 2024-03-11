//-------------------set up the application -------------------------------


//import modules

const readline = require("readline");

const commandsController =  require("./controller")


// Display instructions on how to use each command

function instructions () {
	console.log('\x1b[33m', "                    Commands:");
	console.log('\x1b[38;2;255;165;0mlist\x1b[0m \x1b[38;2;255;255;0m ------------------------- \x1b[0m \x1b[38;2;173;216;230mDisplay To Do list;\x1b[0m');
	console.log('\x1b[38;2;255;165;0mtask\x1b[0m \x1b[38;2;255;255;0m ------------------------- \x1b[0m \x1b[38;2;173;216;230mDisplay one task by chosen ID;\x1b[0m');
	console.log('\x1b[38;2;255;165;0mpost <task>\x1b[0m \x1b[38;2;255;255;0m ------------------ \x1b[0m \x1b[38;2;173;216;230mCreate new To Do task;\x1b[0m');
	console.log('\x1b[38;2;255;165;0mchange <task> <id>\x1b[0m \x1b[38;2;255;255;0m ------------------ \x1b[0m \x1b[38;2;173;216;230mChange chosen task;\x1b[0m');
	console.log('\x1b[38;2;255;165;0mdelete <id>\x1b[0m \x1b[38;2;255;255;0m ------------------ \x1b[0m \x1b[38;2;173;216;230mDelete one task by chosen ID;\x1b[0m');
	console.log('\x1b[38;2;255;165;0mcommands\x1b[0m \x1b[38;2;255;255;0m ------------------ \x1b[0m \x1b[38;2;173;216;230mShow all commands;\x1b[0m');
	console.log('\x1b[38;2;255;165;0mend\x1b[0m \x1b[38;2;255;255;0m ------------------ \x1b[0m \x1b[38;2;173;216;230mQuit the application;\x1b[0m');
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
		}
	}
	catch(error){
		console.error(error);
	}
} );



module.exports = instructions;