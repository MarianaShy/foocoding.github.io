import { defineRoute, router } from './utils/define-route.js'
import getCounter from './utils/get-counter.js';
import { getUsers, saveUsers} from './utils/get-users.js';





let users = await getUsers(process.cwd() + '/data/users.json');
let posts = await getUsers(process.cwd() + '/data/posts.json')

let userId = getCounter(users[users.length - 1].id) 


defineRoute('GET', '/users', (req, res) => getAll(req, res, users));
defineRoute('GET', '/posts', (req, res) => getAll(req, res, posts));


function getAll (req, res, items) {
	const itemsObject = items.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {});
	
	if(typeof items === 'object' && Object.keys(items).length > 0)	{
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(itemsObject))
	}
	else {
		res.writeHead(404, {'Content-Type': 'application/json'})
		res.end()
	}
}

defineRoute('GET', '/posts', (req, res) => {
	const postsObject = posts.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {});
	
	if(typeof posts === 'object' && Object.keys(posts).length > 0)	{
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(postsObject))
	}
	else {
		res.writeHead(404, {'Content-Type': 'application/json'})
		res.end()
	}
})




defineRoute('GET', '/users/:id', (req, res) => {
	
	const { url } = req;
	if (url.startsWith('/users/')) {
		const userId = url.split('/')[2];
		const user = users[userId];

		if(!user)	{
			
			res.writeHead(404, {'Content-Type': 'application/json'})
			res.end()
		}
		else {
			res.writeHead(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify(users[userId]))
		}
}
})



defineRoute('POST', '/users', (req, res) => {
	const newUserId = userId();
if(!req.body.login || !req.body.email){
	res.writeHead(400, {'Content-Type': 'application/json'})
	res.end()
	return
}
else if (req.body.login && req.body.email) {
	const {login, email} = req.body;
	let newUser = {id: newUserId, login: login, email: email};
	users.push(newUser)
	saveUsers('./data/users.json', users)
	res.writeHead(201, {'Content-Type': 'application/json'})
	res.end(JSON.stringify(newUser))
	return
}
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
			saveUsers('./data/users.json', users)

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

			saveUsers('./data/users.json', users)
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