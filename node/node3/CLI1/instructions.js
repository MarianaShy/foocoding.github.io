// -----------------define functions----------------------------

async function getAll() {
	try {
		const response = await fetch("http://localhost:3000/todos");
		
		const toDoList = await response.json();
		return toDoList;
	} catch (error) {
		console.error(error);
	}
}



async function getById(id) {
	try {
		const response = await fetch("http://localhost:3000/todos/" + id);
		const task = await response.json();
		return task;
	} catch (error) {
		console.error(error);
	}
}



async function post(text) {
	try {
		const response = await fetch("http://localhost:3000/todos",
		{
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({text}),
		});
		const postNew = await response.json();
		return postNew;
	 	} 
	catch (error) {
		console.error(error);
	}
}




async function deleteById(id) {
	try {
		const response = await fetch("http://localhost:3000/todos/" + id,
		{
		method: "DELETE",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({id}),
		});
		await response;
	 	} 
	catch (error) {
		console.error(error);
	 }
}
module.exports = {getAll, getById, post, deleteById};