
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const model = require('../models/model')
const path = require('path')
const fs = require('fs')

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

router.post('/new', async (req, res) => {
    try{
        const employer = new model(req.body)
        await employer.save()
        res.end()
    }catch(err){
        console.error(`Echec lors de l'insertion de l'employer ${err}`)
    }
})

router.get('/employers', async (req, res) => {
    try{
        const result = await model.find()
        res.json(result)
    }catch(err){
        console.error("Une erreur lors de l'envoie des données")
    }
})

router.put('/update', async (req, res) => {
    try{
        await model.updateOne({_id: req.body.id}, {$set :
            {name: req.body.name, email: req.body.email, poste: req.body.poste, montant: req.body.montant}
        })

        res.end('donnée modifier')
    }catch(error){
        console.error(`Une erreur ${error}`)
        res.end('fin')
    }
})

router.delete('/delete', async (req, res) => {
    try{
        // console.log(req.body.id)
        await model.findByIdAndDelete(req.body.id)
        res.end('Supprésion')
    }catch(err){
        console.error('Une erreur lors de la suppresion', err)
        res.end('Erreur')
    }
})

module.exports = router