
const mongoose = require('mongoose')

const emploieSchema = mongoose.Schema({
        name: {type: String, required: true},
        email: {type: String, required: true,unique: false, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Veuillez entrer une adresse mail valide']},
        poste: {type: String, required: true},
        montant: {type: Number, required: true}
})

const emploieModel = mongoose.model('Employer',emploieSchema)

module.exports = emploieModel