import express from 'express';
import morgan  from 'morgan';
import cors from 'cors';
import 'reflect-metadata';
import { createConnection, CustomRepositoryCannotInheritRepositoryError } from 'typeorm';
import personaRoute from "./route/persona.route";

const app = express();
app.set('port', 3000);

createConnection();

//middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Importacion de rutas
app.use(personaRoute);

//Inicia servidor
app.listen(app.get('port'));
console.log("Puerto "+ app.get('port'));
