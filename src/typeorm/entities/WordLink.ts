import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name: 'words_links'})
export class WordLink{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_word: number;

    @Column()
    id_link: number;
}