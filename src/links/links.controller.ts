import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { LinkDto } from 'src/dtos/Link.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {

    constructor(private linkService: LinksService){}

    @Get()
    getLinks(){
        return this.linkService.getLinks();
    }

    @Post()
    createLink(@Body()createLinkDto: LinkDto){
        return this.linkService.createLink(createLinkDto);
    }

    @Put(':id')
    updateLink(@Param('id')id:number, @Body() updateLink: LinkDto){
        return this.linkService.updateLink(id,updateLink);
    }
}
