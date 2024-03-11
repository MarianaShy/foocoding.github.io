"use strict"

//call  UUID module 
import { v4 as uuidv4 } from 'uuid';

//call functions which handles data for CRUD operations
import * as models from "./model.js";


//handle routes, catch error


//get all todos
async function getAll(req, res) {
	try {
		const todos = await models.getAll();
		res.status(200).json( todos ); 
   } catch (error) {
	res.status(500).json({ error: error.message });
   }
};



//get by id
async function getById(req, res) {
	try {
		const todosById = await models.getById(req.params.id);
		if (!todosById) {
         res.status(404).json("No todos with this id");
		}
		else {
			res.status(200).json( todosById ); }
		}
		 catch (error) {
	res.status(500).json({ error: error.message });
   }
};





//create new todo
async function create(req, res) {
	try {
		if (!req.body.text){
			res.status(400).json;
	   }
		else {
			const newTodo = { id: uuidv4(), text: req.body.text, "completed": false };
			const todos = await models.create(newTodo)
			res.status(200).json(newTodo);
	   }
   } catch (error) {
		res.status(500).json({ error: error.message });
	}
};




//delete Todo by ID
async function deleteById (req, res) {
   try {
		//findIndex
      const todoById = await models.getById(req.params.id)
      if(!todoById){
         res.status(404).json("No todos with this id");
      }
      else {
      const deleted = await models.deleteById(todoById)
		res.status(204).json("The task was deleted")
			}
   } catch (error) {
   res.status(500).json({ error: error.message });
   }
};



//change Todo by ID
async function change (req, res) {
   try {
      const matchingId = await models.findById(req.params.id)
      if(!matchingId){
         res.status(404).json("No todos with this id");
      }

      else if (!req.body.text)  {
				res.status(404).json("Missing required field text");
		}
// an index instead of matching id
		await models.changeById(matchingId, req.body.text)
      res.status(200).json('Changed');


   } catch (error) {
   res.status(500).json({ error: error.message });
   }
};

export { getAll, create, deleteById, change, getById };