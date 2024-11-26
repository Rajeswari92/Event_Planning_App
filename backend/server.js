const express = require('express');
const database = require("./database/db.js") 
const dotenv = require('dotenv');
const app = express();
dotenv.config();
PORT = 5000;
// app.get('/', (req, res) => {
//     res.send("Welcome to Event Plannig App Page")
// });
database();
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
