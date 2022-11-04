const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect("mongodb+srv://root:admin@cluster.r35yfvx.mongodb.net/?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log("Conected to Mongo Database"))
    .catch((error) => console.log(error));
}

module.exports = connectDatabase;