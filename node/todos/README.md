Welcome to the Todos API server! This server allows you to manage your To Do list with ease through HTTP requests. Below is a brief overview of the available operations and their endpoints:

GET /todos:
This endpoint retrieves all todos from the server.
Example: GET /todos


POST /todos:
This endpoint allows you to create a new todo.
You need to provide a JSON object with the following format:
json
{
  "text": "Your todo text"
}
The text field is required with a minimum length of 5 characters and a maximum length of 100 characters.
Example: POST /todos


DELETE /todos/:id:
This endpoint allows you to delete a todo by its ID.
Example: DELETE /todos/123


PATCH /todos/:id:
This endpoint allows you to update a todo by its ID.
You need to provide a JSON object with the fields you want to update.
The text field is required with a minimum length of 5 characters and a maximum length of 100 characters.
Example: PATCH /todos/123
json
{
  "text": "Updated todo text"
}


Please ensure to include the appropriate request headers and provide valid data according to the specified constraints. Enjoy managing your todos with the Todos API server! If you have any questions or issues, feel free to reach out to the server administrator for assistance.