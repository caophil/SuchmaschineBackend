import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { Word } from 'src/typeorm/entities/Word';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordLink } from 'src/typeorm/entities/WordLink';
import { Link } from 'src/typeorm/entities/Link';

@Module({
  imports: [TypeOrmModule.forFeature([Word]), TypeOrmModule.forFeature([WordLink]) , TypeOrmModule.forFeature([Link])],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule {}
