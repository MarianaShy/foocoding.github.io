import { defineRoute, router } from './utils/define-route.js'

//---------------users---------------
//fake data
let users = [
		{id:1, login:'Harry', email:'harry.potter@gmail.com'},
		{id:2, login:'Ron', email:'ron.wisley@gmail.com'},
		{id:3, login:'Luna', email:'luna.lovegood@gmail.com'},
		{id:4, login:'Hermione', email:'hermione.granger@gmail.com'}
 ] ;


defineRoute('GET', '/users', (req, res) => {
	const usersObject = users.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {});
	
	if(typeof users === 'object' && Object.keys(users).length > 0)	{
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(usersObject))
	}
	else {
		res.writeHead(404, {'Content-Type': 'application/json'})
		res.end(JSON.stringify('There are no users existing'))
	}
})


defineRoute('GET', '/users/:id', (req, res) => {
	
	const { url } = req;
	if (url.startsWith('/users/')) {
		const userId = url.split('/')[2];
		const user = users[userId];

		if(!user)	{
			
			res.writeHead(404, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User ${userId} is not found`}))
		}
		else {
			res.writeHead(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify(users[userId]))
		}
}
})



defineRoute('POST', '/users', (req, res) => {

	//fake data
	req.body = {
		login: 'Albus',
		mail: 'albus.dumbledore@gmail.com'
	}
	const newUserId = 5;

	const {login, mail} = req.body;
	let newUser = {id: newUserId, login: login, mail: mail};

	users.push(newUser)
	res.writeHead(201, {'Content-Type': 'application/json'})
	res.end(JSON.stringify({message: `New user ${newUser.login} was created`}))
})



defineRoute('PATCH', '/users/:id', (req, res) => {
	const { url } = req;
	let updatedUser = {login:'Sirius', email:'sirius.black@gmail.com'};
	const {login, mail} = updatedUser;


	if (url.startsWith('/users/')) {
		const userId = parseInt(url.split('/')[2]); 
		const user = users[userId];


		if(!user)	{
			res.writeHead(404, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} is not found`}))
		}
		else {
			if (login) users[userId].login = login;
			if (mail) users[userId].mail = mail;

			res.writeHead(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} was updated`}))
		}
	}
	
})




defineRoute('DELETE', '/users/:id', (req, res) => {
	const {url} = req;

	if (url.startsWith('/users/')) {
		const userId = parseInt(url.split('/')[2]); 
		const user = users[userId];


		if(!user)	{
			res.writeHead(404, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} is not found`}))
		}
		else {
			users.splice(userId, 1);


			res.writeHead(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} was deleted`}))
		}
	}
	

})







/*defineRoute('GET', '/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({
    message: 'GET /users/ matched'
  }))
})

defineRoute('GET', '/users/:id', (req, res) => {
  const userId = req.params.id

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({
    message: `GET /users/:id route matched with ${userId} ID`
  }))
})

defineRoute('POST', '/users', (req, res) => {
  const userId = req.params.id

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({
    message: `POST /users route matched`,
    body: req.body
  }))
})
*/
export default router