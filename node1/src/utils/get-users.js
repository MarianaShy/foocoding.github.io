
import { promises as fs } from 'fs';


async function getUsers(file) {
	try {
		 const data = await fs.readFile(file, 'utf8');
		 return data;
	} catch (error) {
		 throw new Error(`Error reading file: ${error}`);
	}
}

export default getUsers