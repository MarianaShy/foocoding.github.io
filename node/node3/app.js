
import {open} from 'node:fs/promises'
const file = await open ("users-data1.csv")

let isFirstLine = true;
let sum = 0
let maxAge = -Infinity
let minAge = Infinity
let lineCount = 0 

for await (const line of file.readLines()){
	if (isFirstLine) {
		isFirstLine = false
		continue
	}


const cells = line.match(/(\s*'[^']+'|\s*[^,]+)(?=,|$)/g)
sum += cells.at(-1) | 0
lineCount += 1



if (maxAge < cells[3]){
	maxAge = cells[3]
}
if (minAge > cells[3]){
	minAge = cells[3]
}

}



console.log(sum)
console.log(sum / lineCount)
console.log(maxAge)
console.log(minAge)