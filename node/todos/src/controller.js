
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



export { getAll };