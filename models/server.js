const express = require('express')
const cors = require('cors');
const { dbConexion } = require('../database/config');

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT;

        // Rutas
        this.usuarios = '/api/usuarios';

        // Conectar BD
        this.conectarDB();

        // Middlewares
        this.middlewares();
        
        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConexion();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuarios,require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Trabajando en el puerto:',this.port);
        })
    }
}

module.exports = Server;