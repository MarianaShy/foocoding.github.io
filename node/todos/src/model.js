"use strict"


import { getData, postData } from './utils/manage-data.js';

//get data from json file
let todos = await getData('../data/todos.json');

//get all todos from server
async function getAll () { 
	return todos
}

//create new todo
async function create (newTodo) { 
	todos.push(newTodo)
	postData('../data/todos.json', todos)
	return todos
}


//Find by id
async function findById(id)  {
	let foundById = todos.find((item) => item.id === id )
	return foundById
}

//Delete by id
	async function deleteById(todo)  {
		todos.splice(todo, 1);
		postData('../data/todos.json', todos)
		return todos
}

//change by id
async function changeById(matching)  {
	todos = todos.map((item) => {
		if(item.id === matching.id) {
			return matching
		}
		return item
		}
	)
	postData('../data/todos.json', todos)
	return todos
}


export { getAll, create,  changeById, findById, deleteById};