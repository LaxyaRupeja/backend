require('dotenv').config()
const mongoose = require('mongoose');
const connection = () => {
    try {
        mongoose.connect(process.env.mongoURL)
        console.log('Connected To Database')
    }
    catch {
        console.log('Something went wrong')
    }

}
module.exports = { connection }