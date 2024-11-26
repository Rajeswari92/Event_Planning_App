const mongoose = require('mongoose');

 const database = () =>{
    mongoose
    .connect(process.env.MONGO_URI, {dbName: "Event_Planning-Database"})
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log("Error", err)
    })
}
module.exports = database;