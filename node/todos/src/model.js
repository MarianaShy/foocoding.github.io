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


export { getAll, create };