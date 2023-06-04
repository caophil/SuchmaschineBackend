import { Injectable } from '@nestjs/common';
import { RequestDto } from 'src/dtos/Request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from 'src/typeorm/entities/Word';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {

    constructor(@InjectRepository(Word) private wordRepository: Repository<Word>) {}
    

    async getResult(request: RequestDto){
        var words = request.eingabe.split(" ");
        var ids = [];
        for (let element of words){
            try{
                const value = await this.wordRepository.find({
                    where: [{word: element}]
                });
                ids.push(value[0].id);
            }catch(err){
                console.log(err);
                
            }
        }
        return ids;
    }

}
