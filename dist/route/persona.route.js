"use strict";
var express_1 = require("express");
var persona_controller_1 = require("../controller/persona.controller");
var router = express_1.Router();
//SELECT * 
router.get('/persona', persona_controller_1.getPersona);
//SELECT * FROM personas WHERE per_codigo = codigo
router.get('/persona/:codigo', persona_controller_1.getfindId);
//Insertar
router.post('/persona', persona_controller_1.addPersona);
//Actualizar
router.put('/persona/:codigo', persona_controller_1.updatePersona);
//DELETE
router.delete('/persona/:codigo', persona_controller_1.deletePersona);
module.exports = router;
