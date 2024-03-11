//-------------------set up functions to commands -------------------------------

const {getAll, getById, post, deleteById} =  require("./instructions.js")

async function commandsController (command, arguments) {
	switch (command){
	case "LIST":
		const list = await getAll()
		console.log(list)
		break



	case "TASK":
		if (!arguments) {
			throw new Error("Please provide required arguments");
		}
		else{
			const id = arguments[arguments.length -1]
			const task = await getById(id)
			console.log(task)
		}
		
	break	



	case "POST":
		if (!arguments) {
			throw new Error("Please provide required arguments");
		 }
		else
		{const text = arguments.join(" ")
		const createNew = await post(text)
		console.log(createNew)}
		break



		case "DELETE":
		if (!arguments) {
			throw new Error("Please provide required arguments");
		 }
		const id = arguments[arguments.length -1]
		const deleted = await deleteById(id)
		console.log(deleted)
		break


	default:
		console.log("Please enter correct command")
}
}




module.exports = commandsController;