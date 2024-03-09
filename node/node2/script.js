const fs = require('fs');




	let totalSalary = 0;
	let totalEntries = 0;
	let minAge = Infinity;
	let maxAge = -Infinity;
	let professionsSalary = {};
	 




	const readStream = fs.createReadStream("users-data.csv");
	let streamContainer = '';




	readStream.on('data', chunk => {
		streamContainer += chunk;

		const lines = streamContainer.split(/\r?\n/);
		streamContainer = lines.pop();

		lines.forEach(line => {
			const field = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);


			const age = parseInt(field[3]);
			const profession = field[7];
			const salary = parseInt(field[8]);
			



			if (!isNaN(salary)) {
				totalSalary += salary;
				totalEntries++;


				if (!professionsSalary[profession]) {
					professionsSalary[profession] = {
						 minSalary: salary,
						 maxSalary: salary,
					};
			  } else {
				professionsSalary[profession].minSalary = Math.min(professionsSalary[profession].minSalary, salary);
				professionsSalary[profession].maxSalary = Math.max(professionsSalary[profession].maxSalary, salary);
			  }
			}


			if (!isNaN(age)) {
				if (age < minAge) minAge = age;
				if (age > maxAge) maxAge = age;
			}
		});


	});

	readStream.on('end', () => {
	const averageSalary = totalEntries === 0 ? 0 : totalSalary / totalEntries;

result = `Total Salary: ${totalSalary}\nAverage Salary: ${averageSalary}\n`;

Object.entries(professionsSalary).forEach(([profession, stats]) => {
	result += `${profession.toUpperCase()} have the Minimum Salary: ${stats.minSalary}\n${profession.toUpperCase()} have the Maximum Salary: ${stats.maxSalary}\n`;
});
result += `Minimal age: ${minAge}\nMaximal age: ${maxAge}`






	fs.writeFile('results.txt', result, err => {
		if (err) {
			console.error('Error writing results to file:', err);
		} 
	});
	});
/* 

import {open} from 'node:fs/promises'
const file = await open ('./ users-data.scv')

let firstLine = true;
let sum = 0
let maxAge = 0
let minAge = 0
let LineCount = 0 

for await (const line of file.readLines()){
	if (isFirstLine) {
		isFirstLine = false
		continue
	}


const columns = line.match(/(\s*'[^']+'vl\s*[^,]+)(?=vl$)/g)
}

if (maxAge < column[3]){
	maxAge = column [3]
}


sum += column.at(-1) vl 0   Перетворює рядок в  номер


regex101.com   створення RegEx


zsh   zshell CLI we can install 

"node:readline/ptomises"


SELECT COLUMNS CTR+ ALT + СТРІЛКИ

КОЛОРИ CHALK 



CONSOLE.LOG(PROCESS.ARGV);
ПЕРЕДАЄ ДАНІ З КОНСОЛІ, ЯКІ БУЛИ ВВЕДЕНІ







const options = {
	'color': { type: 'boolean'. short: 'C'}

}


CONSOLE.LOG(process.argv.slice(2));



open API


const BEAR_REACT_APP_API = 'http://api.openbrewerlydb.org/v1/'


// all :id random. search


import {parseArgs} from 'node:unit'

const options = {
	'all': { type: boolean, short: 'A'}
	'id': { type: string, short: 'I'}
	'random': { type: boolean, short: 'R'}

}

const {values} = parseArgs({
	options,
	strict: false
}) 
console.log(values)

all
if(values.all === true){

	const response = await fetch (`${API_BASE_URL}breweries`)
	const data = await response.json()
}

ID

if(values.id === string){

	const response = await fetch (`${API_BASE_URL}breweries/${values.id}`)
	const data = await response.json()
}

 random

if(values.random === true){

	const response = await fetch (`${API_BASE_URL}breweries/random`)
	const data = await response.json()
	console.log(data)
}






Express


import express from 'express'

export const router = express.Routes()


router