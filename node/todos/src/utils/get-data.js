import { promises as fs } from 'fs';

async function getData(file) {
    try {
        const data = await fs.readFile(file, 'utf8');
        return (data); 
    } catch (error) {
        throw new Error(error);
    }
}

export { getData };