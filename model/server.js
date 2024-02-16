const express = require('express');
const cors = require('cors');
const db = require('../db/connection');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            tasks: '/api/tasks'
        }

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online!!');
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.tasks, require('../routes/tasks'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        })
    }
}
module.exports = Server;