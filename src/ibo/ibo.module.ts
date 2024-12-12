import { Module } from '@nestjs/common';
import { IboService } from './ibo.service';
import { IboController } from './ibo.controller';

@Module({
  controllers: [IboController],
  providers: [IboService],
})
export class IboModule {}
