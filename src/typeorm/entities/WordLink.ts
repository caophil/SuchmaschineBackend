import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name: 'wordlinks'})
export class WordLink{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idword: number;

    @Column()
    id_link: number;
}