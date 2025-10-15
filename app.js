const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const NotFound = require('./middlewares/NotFound')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./routes/employer')
const createDb = require('./db/createDb')
const url = require('url')

const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
createDb('mongodb://localhost/employer')

app.use((req, res, next) => {
    if(req.url === '/index.html'){
        req.url = '/api/employer/new'
        res.sendFile(path.join(__dirname, './public/index.html'))

    }
    console.log(req.url)
    next()
})

app.use('/api/employer', router)

app.use((req, res, next) => {
  if (req.path.startsWith('/.well-known')) {
    return res.status(204).end(); // pas de contenu, mais pas une erreur
  }
  next();
})
app.use(NotFound)
app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`serveur ecoute sur le port : ${port}`)
}) 