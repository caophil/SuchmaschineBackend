import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name: 'links'})
export class Link{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @Column()
    time_stamp: Date;
}