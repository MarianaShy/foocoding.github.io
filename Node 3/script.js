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
