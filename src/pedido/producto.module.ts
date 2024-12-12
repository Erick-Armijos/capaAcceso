import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { PedidoDao } from 'src/dao/pedido.dao';
import { PedidoService } from './producto.service';
import { PedidoController } from './producto.controller';

@Module({
  providers: [DatabaseService, PedidoDao, PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
