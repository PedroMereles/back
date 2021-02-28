import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Tipo {

    @PrimaryGeneratedColumn({name:'tip_codigo'})
    codigo: number;

    @Column({name:'tip_descripcion'})
    descripcion: string;

    @Column({name:'tip_obs'})
    obs: string;

}
