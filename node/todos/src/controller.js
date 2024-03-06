
import { getData } from './utils/get-data.js';


// get data from json file
let todos = await getData('../data/todos.json');



async function getAll(req, res) {
	
	try {
		res.send(todos) 
  } catch (error) {
		throw new Error(error);
  }
 };

 async function create(req, res) {
	try {
		res.send('Create a new todo') 
  } catch (error) {
		throw new Error(error);
  }
 };

 async function markComplited(req, res) {
	try {
		res.send('Delete todo by id') 
  } catch (error) {
		throw new Error(error);
  }
 };

 async function change(req, res) {
	try {
		res.send('Change todo by id')
  } catch (error) {
		throw new Error(error);
  }
 };


export { getAll, create, markComplited, change };