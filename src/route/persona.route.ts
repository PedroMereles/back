import {Router} from 'express';
import { getPersona, getfindId, addPersona, updatePersona, deletePersona } from '../controller/persona.controller';

const  router = Router();
//SELECT * 
router.get('/persona',getPersona);

//SELECT * FROM personas WHERE per_codigo = codigo
router.get('/persona/:codigo',getfindId)

//Insertar
router.post('/persona',addPersona);

//Actualizar
router.put('/persona/:codigo',updatePersona);

//DELETE
router.delete('/persona/:codigo',deletePersona);
export = router;


