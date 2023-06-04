import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { Word } from 'src/typeorm/entities/Word';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Word])],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule {}
