const mongoose = require("mongoose");

const connectToDb = async () => {
    await mongoose
        .connect('mongodb+srv://kavyasunilpanicker:vh9FgaOoJGTOIJL3@cluster0.wrw8z.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster0'
        )
        .then(() => {
            console.log('db connected');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectToDb;