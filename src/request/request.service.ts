import { Injectable } from '@nestjs/common';
import { RequestDto } from 'src/dtos/Request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from 'src/typeorm/entities/Word';
import { Repository } from 'typeorm';
import { WordLink } from 'src/typeorm/entities/WordLink';
import {LinkRank} from '../dtos/LinkRank';
import { Link } from 'src/typeorm/entities/Link';

@Injectable()
export class RequestService {

    constructor(@InjectRepository(Word) private wordRepository: Repository<Word>,
    @InjectRepository(WordLink) private wordLinkRepository: Repository<WordLink>,
    @InjectRepository(Link) private LinkRepository: Repository<Link>
    ) {}
    

    async getResult(request: RequestDto){
        var words = request.eingabe.split(" ");
        var word_ids = await this.getWordIds(words);
        var link_ids = await this.getLinkIds(word_ids);
        var links = await this.getLinks(link_ids);
        return links;
    }

    async getLinks(link_ids: number[]){
        var links: LinkRank[] = [];
        for(let element of link_ids){
            const found = links.find((link)=>{
                return link.id == element;
            });
            if(found){
                found.rank +=1;    
                continue            
            }
            var newLink = new LinkRank();
            newLink.id = element;
            newLink.rank= 1;
            var linkname = await this.LinkRepository.findOne({
                where: [{id: element}]
            });
            newLink.link= linkname.link;
            links.push(newLink);
        }
        links.sort((a,b)=>{
            return b.rank - a.rank;
        });
        return links;
    }

    async getLinkIds(word_ids: number[]){
        var link_ids =[];
        for(let element of word_ids){
            try{
                const value = await this.wordLinkRepository.find({
                    where:[{id_word: element}]
                });
                for (let e of value){
                    link_ids.push(e.id_link);
                }
            }catch(err){
                console.log(err);
            }
        }
        return link_ids;
    }

    async getWordIds(words: string[]){
        var word_ids = [];
        for (let element of words){
            try{
                const value = await this.wordRepository.find({
                    where: [{word: element}]
                });
                word_ids.push(value[0].id);
            }catch(err){
                console.log(err);
                
            }
        }
        return word_ids;
    }

}
