
"use strict"
/*
function generateBookList(bookList) {
	const ulForBooks = document.createElement('ul');

	for (let index = 0; index < bookList.length; index++) {
		const liForBook = document.createElement('li');
		liForBook.textContent = bookList[index];
		ulForBooks.appendChild(liForBook); 
	}

	console.log(bookList)
	return(ulForBooks);
}

const bookList = ["a_tree_grows_in_brooklyn",
"harry_potter_and_the_deathly_hallows",
"fried_green_tomatoes_at_the_whistle_stop_cafe",
"harry_potter_and_the_prisoner_of_azkaban",
"harry_potter_and_the_sorcerers_stone",
"harry_potter_and_the_order_of_the_phoenix",
"harry_potter_and_the_goblet_of_fire",
"harry_potter_and_the_half_blood_prince",
"bli_din_egen_bästa_vän",
"ella_gör_sig_fri"
	];

 
const generatedBookList = generateBookList(bookList);
document.body.appendChild(generatedBookList);
	*/
const bookPropertiesList = {
	"a_tree_grows_in_brooklyn": {
		title: "A Tree Grows in Brooklyn",
		author: "Betty Smith",
		genres: "Historical Fiction",
		language: "English",
		first_published: "1943"
	},
	"fried_green_tomatoes_at_the_whistle_stop_cafe": {
		title: "Fried Green Tomatoes at the Whistle Stop Cafe",
		author: "Fannie Flagg",
		genres: "Historical Fiction",
		language: "English",
		first_published: "1987"
	},
	"harry_potter_and_the_prisoner_of_azkaban": {
		title: "Harry Potter and the Prisoner of Azkaban",
		author: "J.K. Rowling",
		genres: "Science Fiction Fantasy",
		language: "English",
		first_published: "1999"
	},
	"harry_potter_and_the_sorcerers_stone": {
		title: "Harry Potter and the Sorcerers Stone",
		author: "J.K. Rowling",
		genres: "Science Fiction Fantasy",
		language: "English",
		first_published: "1999"
	},
	"harry_potter_and_the_order_of_the_phoenix": {
		title: "Harry Potter and the Order of the Phoenix",
		author: "J.K. Rowling",
		genres: "Science Fiction Fantasy",
		language: "English",
		first_published: "1999"
	},
	"harry_potter_and_the_deathly_hallows": {
		title: "Harry Potter and the Deathly Hallows",
		author: "J.K. Rowling",
		genres: "Science Fiction Fantasy",
		language: "English",
		first_published: "1999"
	},
	"harry_potter_and_the_goblet_of_fire": {
		title: "Harry Potter and the Goblet of Fire ",
		author: "J.K. Rowling",
		genres: "Science Fiction Fantasy",
		language: "English",
		first_published: "1999"
	},
	"harry_potter_and_the_half_blood_prince": {
		title: "Harry Potter and the Half-Blood Prince",
		author: "J.K. Rowling",
		genres: "Science Fiction Fantasy",
		language: "English",
		first_published: "1999"
	},
	"bli_din_egen_bästa_vän": {
		title: "Bli din egen bästa vän",
		author: "Olof Röhlander",
		genres: "relationer och personlig utveckling",
		language: "Swedish",
		first_published: "2022"
	},
	"ella_gör_sig_fri": {
		title: "Ella gör sig fri",
		author: "Karin Boye",
		genres: "Skönlitteratur",
		language: "Swedish",
		first_published: "2012"
	}
	};


	function generateDetailedBookList(bookPropertiesList) {
		const listForBooks = document.createElement('ul');
		listForBooks.classList.add('book-list__flex');
		document.body.appendChild(listForBooks);


		for (const element in bookPropertiesList) {
			const bookItem = document.createElement('li');
			bookItem.classList.add('book-item');

			const bookTitle = document.createElement('h2');
      	bookTitle.textContent = bookPropertiesList[element].title;
			bookItem.appendChild(bookTitle);

			const bookAuthor = document.createElement('p');
      	bookAuthor.textContent = bookPropertiesList[element].author;
			bookItem.appendChild(bookAuthor);

			const bookGenres = document.createElement('p');
      	bookGenres.textContent = bookPropertiesList[element].genres;
			bookItem.appendChild(bookGenres);

			const bookLanguage = document.createElement('p');
      	bookLanguage.textContent = bookPropertiesList[element].language;
			bookItem.appendChild(bookLanguage);

			const bookPublished = document.createElement('p');
      	bookPublished.textContent = bookPropertiesList[element].first_published;
			bookItem.appendChild(bookPublished);

			listForBooks.appendChild(bookItem);
			console.log(bookPropertiesList[element].title);
		}
		}
		
		


	generateDetailedBookList(bookPropertiesList);
	