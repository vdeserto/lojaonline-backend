import express from 'express'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

app.use(cors(
    //{origin : 'http://localhost:3000/'} option ORIGIN -> o front-end permitido para consumo da API
    ))
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


// Rota - conjunto
// Recurso - Usuário

// MÉTODOS HTTP - GET, POST, PUT, DELETE
// Parâmetros

// GET -> BUSCAR UMA INFORMAÇÃO (LISTA, ITEM)
// POST -> CRIANDO UMA INFORMAÇÃO

// PUT -> EDITANDO UMA INFORMAÇÃO
// DELETE -> DELETANDO UMA INFORMAÇÃO


// Query Params: http://localhost:3333/users?search=diego&page2
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users

// app.post('/users/:id', (req, res) => {
//     // console.log(req.query) // Query Params
//     // console.log(req.params)// Route Params
//     // console.log(req.body)// Body


//     res.json({message: 'Hello World'})
// })

//Criar um orfanato - por isso utilizar método POST


app.listen(3333)




