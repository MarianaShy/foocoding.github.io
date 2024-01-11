
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
			const bookTitle = document.createElement('h2');
			const bookAuthor = document.createElement('p');
			const bookGenres = document.createElement('p');
			const bookLanguage = document.createElement('p');
			const bookPublished = document.createElement('p');
			
			bookItem.classList.add('book-item');
			bookItem.id = element;

      	bookTitle.textContent = bookPropertiesList[element].title;
      	bookAuthor.textContent = bookPropertiesList[element].author;
      	bookGenres.textContent = bookPropertiesList[element].genres;
      	bookLanguage.textContent = bookPropertiesList[element].language;
      	bookPublished.textContent = bookPropertiesList[element].first_published;

			bookItem.append(bookTitle, bookAuthor, bookGenres, bookLanguage, bookPublished);
			listForBooks.append(bookItem);
			
		}
		}
	
		
	generateDetailedBookList(bookPropertiesList);
	


		let bookCovers = {
			a_tree_grows_in_brooklyn: './img/1.jpg',
			fried_green_tomatoes_at_the_whistle_stop_cafe: './img/4.jpg',
			harry_potter_and_the_prisoner_of_azkaban: './img/2.jpg',
			harry_potter_and_the_sorcerers_stone: './img/5.jpg',
			harry_potter_and_the_order_of_the_phoenix: './img/3.jpg',
			harry_potter_and_the_deathly_hallows: './img/7.jpg',
			harry_potter_and_the_goblet_of_fire: './img/10.jpg',
			harry_potter_and_the_half_blood_prince: './img/8.jpg',
			bli_din_egen_bästa_vän:'./img/6.jpg',
			ella_gör_sig_fri: './img/9.jpg'
		}

		
		function addCovers(coversList) {
			for (let element in coversList) {
				const book = document.querySelector(`#${element}`)
				const bookCover = document.createElement('img')

				bookCover.classList.add('book-cover');
				
				book.prepend(bookCover);
				bookCover.src = coversList[element];
				
			}
	  	}
		addCovers(bookCovers);
