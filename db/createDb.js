
const mongoose = require('mongoose')

let DATABASE_URL

const createDb = async (DATABASE_URL) => {
    try{
        mongoose.connect(DATABASE_URL)
        console.log('Database connected')
    }catch(err){
        console.error('Une erreur lors de la connexion a la Db : ',err)
    }
}

module.exports = createDb