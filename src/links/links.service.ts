import { Injectable } from '@nestjs/common';
import { Link } from 'src/typeorm/entities/Link';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkDto } from 'src/dtos/Link.dto';

@Injectable()
export class LinksService {

    constructor(@InjectRepository(Link) private linkRepository: Repository<Link>){}

    getLinks(){
        return this.linkRepository.find()
    }

    createLink(link: LinkDto){
        const newLink = this.linkRepository.create({...link, timestamp_visited: new Date(), visited: false});
        return this.linkRepository.save(newLink);
    }

    updateLink(id: number, newlink: LinkDto){
        return this.linkRepository.update({id}, {...newlink, timestamp_visited: new Date()});
    }
}
