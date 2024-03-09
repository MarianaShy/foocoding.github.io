// define functions

async function getAll() {
	try {
		const response = await fetch("http://localhost:3000/todos");
		if (!response.ok) {
		  throw new Error("Can not get data from server");
		}
		const toDoList = await response.json();
		return toDoList;
	 } catch (error) {
		console.error(error);
	 }
}


 
module.exports = getAll;