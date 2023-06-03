import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from 'src/typeorm/entities/Link';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  controllers: [LinksController],
  providers: [LinksService]
})
export class LinksModule {}
