import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './typeorm/entities/Link';
import { LinksModule } from './links/links.module';
import { RequestModule } from './request/request.module';
import { RequestController } from './request/request.controller';
import { Word } from './typeorm/entities/Word';
import { RequestService } from './request/request.service';
import { WordLink } from './typeorm/entities/WordLink';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', 
    password: 'root',
    database: 'Suchmaschiene',
    entities: [Link, Word, WordLink],
    synchronize: true,
  }), LinksModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
