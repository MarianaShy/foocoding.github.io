import { promises as fs } from 'fs';

async function getData(file) {
    try {
        const data = await fs.readFile(file, 'utf8');
        return (JSON.parse(data) )
    } catch (error) {
        throw new Error(error);
    }
}

async function postData(file, data) {
	await fs.writeFile(file, JSON.stringify(data, null, 4), 'utf8');
}

export { getData, postData };


