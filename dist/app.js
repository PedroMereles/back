"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var persona_route_1 = __importDefault(require("./route/persona.route"));
var app = express_1.default();
app.set('port', 3000);
typeorm_1.createConnection();
//middleware
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Importacion de rutas
app.use(persona_route_1.default);
//Inicia servidor
app.listen(app.get('port'));
console.log("Puerto " + app.get('port'));
