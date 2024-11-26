const express = require('express');

const app = express();
PORT = 5000;
// app.get('/', (req, res) => {
//     res.send("Welcome to Event Plannig App Page")
// });
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})