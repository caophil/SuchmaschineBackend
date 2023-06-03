import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './typeorm/entities/Link';
import { LinksModule } from './links/links.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', 
    password: 'root',
    database: 'Suchmaschiene',
    entities: [Link],
    synchronize: true,
  }), LinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
