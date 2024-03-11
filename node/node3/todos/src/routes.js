"Use strict"

import express, { Router } from 'express';
import * as controller from './controller.js';
import validateData from '../src/utils/schema.js';


//import { getAll } from './controller.js'; 
export const router = Router();


//define routes

router.get('/todos', controller.getAll)

router.get('/todos/:id', controller.getById)

router.post('/todos', validateData,  controller.create)

router.delete('/todos/:id', controller.deleteById)


router.patch('/todos/:id', validateData, controller.change)

