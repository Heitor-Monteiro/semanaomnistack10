const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-f7osy.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/* O comando 'app.use(express.json());' precisa vim
antes da linha 'app.use(routes);' para funcionar
*/
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);






// Métodos HTTP => GET, POST, PUT, DELETE

// Tipode de parâmetros:

// (GET) Query Params: request.query (Filtros, ordenação, paginação, ...)
// (DELETE) Route Params: request.params (Identificar um recurso na alteração ou remoção)
// (POST,PUT) Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)