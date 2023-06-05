import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name: 'tbl_link'})
export class Link{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @Column()
    timestamp_visited: Date;

    @Column()
    visited : Boolean;
}