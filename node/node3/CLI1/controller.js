//-------------------set up functions to commands -------------------------------

const {getAll, post} =  require("./instructions.js")

async function commandsController (command, text) {
	switch (command){
	case "LIST":
		const list = await getAll()
		console.log(list)
		break
	case "POST":
		if (!text) {
			throw new Error("Please provide required arguments");
		 }
		const createNew = await post(text)
		console.log(createNew)
		break
	default:
		console.log("Please enter correct command")
}
}




module.exports = commandsController;