
import { promises as fs } from 'fs';

async function getUsers(file) {
    try {
        const data = await fs.readFile(file, 'utf8');
        return JSON.parse(data); 
    } catch (error) {
        throw new Error(error);
    }
}

async function saveUsers(file, users) {
    try {
        await fs.writeFile(file, JSON.stringify(users));
        console.log('User saved successfully');
    } catch (error) {
        throw new Error(error);
    }
}

export { getUsers, saveUsers };
