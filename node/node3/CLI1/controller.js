//-------------------set up functions to commands -------------------------------

const {getAll, getById, post, deleteById, changeById} =  require("./instructions.js")

async function commandsController (command, arguments) {
	switch (command){



	case "LIST":
		const list = await getAll()
		console.log(list)
		break



	case "TASK":
		const idTask = arguments[arguments.length -1]

		if (!idTask) {
			console.log( "\x1b[31mPlease provide required arguments\x1b[0m");
		}
		else{
			const task = await getById(idTask)
			console.log(task)
		}
		
	break	



	case "POST":
		const text = arguments.join(" ")
		if (!text) {
			console.log( "\x1b[31mPlease provide required arguments\x1b[0m");
		 }
		else
		{
		const createNew = await post(text)
		console.log(createNew)}
		break



		case "DELETE":
		const id = arguments[arguments.length -1]
			if (!id) {
			console.log( "\x1b[31mPlease provide required arguments\x1b[0m");
		 }
		else {
				const deleted = await deleteById(id)
		console.log("\x1b[32mThe task was deleted\x1b[0m")
		}
	
		break


		case "CHANGE":
			const idChange = arguments[arguments.length -1]
			const textChange = arguments.slice(0, -1).join(" ")

		if (!idChange || !textChange) {
			console.log( "\x1b[31mPlease provide required arguments\x1b[0m");
		 }
		
		const changed = await changeById(idChange, textChange)
		console.log(changed)
		break

	default:
		console.log("Please enter correct command")
}
}




module.exports = commandsController;