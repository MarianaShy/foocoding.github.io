

import axios from 'axios';
import { program } from 'commander';

console.log(axios.isCancel('something'));


const BASE_URL = "http://localhost:3000"

async function getAll() {
	try {
	  const response = await axios.get('/todos');
	  console.log(response);
	} catch (error) {
	  console.error(error);
	}
 }

