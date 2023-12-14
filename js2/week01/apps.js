
function generateBookList(bookList) {
	const ulForBooks = document.createElement('ul');

	for (let index = 0; index < bookList.length; index++) {
		const liForBook = document.createElement('li');
		liForBook.textContent = bookList[index];
		ulForBooks.appendChild(liForBook[0]); 
	}

	console.log(bookList)
	return(ulForBooks);
}


const bookList = {
	1: {
		title: "A Tree Grows in Brooklyn",
		author: "Betty Smith",
		genres: "Historical Fiction",
		language: "English",
		first_published: "1943"
	},
	2: {
		title: "A Tree Grows in Brooklyn",
		author: "Betty Smith",
		genres: "Historical Fiction",
		language: "English",
		first_published: "1943"
	}
	};

 
const generatedBookList = generateBookList(bookList);
document.body.appendChild(generatedBookList);
