import {Request,Response} from 'express'
import { promises } from "fs";
import { getRepository } from 'typeorm';
import { Persona } from '../entities/persona';


//SELECT * FROM personas
export const getPersona = async(rq : Request, res: Response): Promise <Response> => {
    
    const persona = await getRepository(Persona).find() ;
    return res.json(persona);
}
//SELECT * FROM personas WHERE per_codigo = codigo
export const getfindId = async(rq : Request, res: Response): Promise <Response> => {
    const codigo = rq.params.codigo;
    const persona = await getRepository(Persona).findOne(codigo) ;
    return res.json(persona);

}

//INSERT INTO 
export const addPersona = async(rq : Request, res: Response): Promise <Response> => {
  
    const newpersona = await getRepository(Persona).create(rq.body) ;
    const persona = await getRepository(Persona).save(newpersona)
    return res.json(persona);
}


//ACTUALIZAR
export const updatePersona = async(rq : Request, res: Response): Promise <Response> => {
    const codigo = rq.params.codigo;
    const persona = await getRepository(Persona).findOne(codigo) ;
    if (persona) {
        getRepository(Persona).merge(persona, rq.body) ;
        const update = await getRepository(Persona).save(persona);
        return res.json(update);
    }

    
    return res.json({error:'No se pudo actualizar!!'});
}

//DELETE
export const deletePersona = async(rq : Request, res: Response): Promise <Response> => {
    const codigo = rq.params.codigo;
    const persona = await getRepository(Persona).delete(codigo) ;
    return res.json(persona);

}