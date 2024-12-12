import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ArticuloDao } from 'src/dao/articulo.dao';
import { ArticuloService } from './producto.service';
import { ArticuloController } from './producto.controller';

@Module({
  providers: [DatabaseService, ArticuloDao, ArticuloService],
  controllers: [ArticuloController],
})
export class ArticuloModule {}
