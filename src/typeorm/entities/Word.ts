import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'words'})
export class Word{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;
}