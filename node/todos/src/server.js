"Use strict"

import express from 'express';
import { router } from "./routes.js"
const app = express()
const port = 3000

// Middleware to parse JSON bodies
app.use(express.json());

//Defining routes function
app.use("/", router);



//create server on port 3000
app.listen(port, () => {
  console.log(`Todos application is running on port ${port}`)
})