const mongoose = require("mongoose")

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch(error => console.log(error))

}

module.exports = dbConnect