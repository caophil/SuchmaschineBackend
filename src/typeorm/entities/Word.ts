import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'word'})
export class Word{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;
}