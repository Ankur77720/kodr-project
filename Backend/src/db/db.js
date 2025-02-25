const mongoose = require('mongoose')
const config = require('../config/config')


function connect() {
    mongoose.connect(config.MONGO_URL)
        .then(() => {
            console.log('Database connected')
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = connect