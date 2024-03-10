// -----------------define functions----------------------------

async function getAll() {
	try {
		const response = await fetch("http://localhost:3000/todos");
		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
		}
		const toDoList = await response.json();
		return toDoList;
	 } catch (error) {
		console.error(error);
	 }
}

async function post(text) {
	//const text = arguments.join(" ")
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
 
module.exports = {getAll, post};