import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Persona {

    @PrimaryGeneratedColumn({name:'per_codigo'})
    codigo: number;

    @Column({name:'per_nombre'})
    nombre: string;

    @Column({name:'per_documento'})
    documento: string;

    @Column({name:'per_telefono'})
    telefono: string;
 
    @Column({name:'per_celular'})
    celular: string;

    @Column({name:'per_direccion'})
    direccion: string;

    @Column({name:'per_obs'})
    observacion: string;

}
