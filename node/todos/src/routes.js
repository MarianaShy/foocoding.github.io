"Use strict"

import express, { Router } from 'express';
import * as controller from './controller.js';

//import { getAll } from './controller.js'; 
export const router = Router();


//define routes

router.get('/todos', controller.getAll)

router.post('/todos', controller.create)

router.delete('/todos/:id', controller.markComplited)


router.patch('/todos/:id', controller.change)

