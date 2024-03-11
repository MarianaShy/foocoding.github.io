//-------------------set up functions to commands -------------------------------

const {getAll, getById, post, deleteById, changeById} =  require("./instructions.js")

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
		console.log("The task was deleted")
		break


		case "CHANGE":
		if (!arguments) {
			console.log("Please provide required arguments");
		 }
		idChange = arguments[arguments.length -1]
		const textChange = arguments.slice(0, -1).join(" ")

		const changed = await changeById(idChange, textChange)
		console.log(changed)
		break

	default:
		console.log("Please enter correct command")
}
}




module.exports = commandsController;