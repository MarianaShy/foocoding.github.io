"Use strict"

import express, { Router } from 'express';
import { getAll } from './controller.js';

//import { getAll } from './controller.js'; 
export const router = Router();


//define routes

router.get('/todos', getAll)
router.post('/todos', (req, res) => {
	res.send('Create a new todo')
 })
router.delete('/todos/:id', (req, res) => {
	res.send('Delete todo by id')
 })
router.patch('/todos/:id', (req, res) => {
	res.send('Change todo by id')
 })

