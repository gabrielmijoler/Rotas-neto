const express = require('express')
const consign = require('consign')

// instaciando objeto express
server = express();

// definicao da porta 
server.set('porta', 3010)

server.get('/', (req, res) =>{
    res.json('Rota Raiz Projeto livro Encontrada!!!').status(200)
})

server.get('/autores', (req, res) =>{
    res.json('Rota Autores Encontrada!!!')
})

server.get('/autores/listar', (req, res) =>{
    res.json('Rota Listagem de Autores Encontrada!!!')
})

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into('server')
;

module.exports = server;