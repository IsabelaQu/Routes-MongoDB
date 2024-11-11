
//Configura e inicializa a aplicação, integrando o Express e conectando ao MongoDB.
//Configura o servidor Express, define middlewares, como express.json() para lidar com requisições JSON.
//Importa e usa as rotas da aplicação, como alunoRouter ou usuarioRouter.
//Estabelece a conexão com o banco de dados MongoDB usando o mongoose.connect.

const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const usuarioRouter = require('./routes/usuario');
const lista1Router = require('./routes/lista1');
const alunoRouter = require('./routes/aluno'); 
const professorRouter = require('./routes/professor'); 


const app = express();
app.use(express.json());

app.use('/usuario', usuarioRouter);
app.use('/lista1', lista1Router);
app.use('/aluno', alunoRouter);

// Define as rotas para o endpoint '/professores'
app.use('/professores', professorRouter);


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@nosql.22s6x.mongodb.net/?retryWrites=true&w=majority&appName=NoSQL0`)
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
.catch((err) => {
console.log(err);
});