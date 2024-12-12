import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidoModule } from './pedido/pedido.module';
import { IboModule } from './ibo/ibo.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [PedidoModule, IboModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
