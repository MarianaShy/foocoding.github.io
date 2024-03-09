const readline = require("readline");

const getAll =  require("./instructions.js")

console.log("Hello world" )


async function test() {
	const testInst = await getAll()
console.log(testInst)}

test()
