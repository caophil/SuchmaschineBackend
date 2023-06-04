import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestDto } from 'src/dtos/Request.dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService){}

    @Post()
    getResult(@Body() request: RequestDto){
        return this.requestService.getResult(request);
    }
}
