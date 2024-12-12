// ibo.module.ts
import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { IboDao } from 'src/dao/ibo.dao';
import { IboService } from './ibo.service';
import { IboController } from './ibo.controller';

@Module({
  providers: [DatabaseService, IboDao, IboService],
  controllers: [IboController],
})
export class IboModule {}
