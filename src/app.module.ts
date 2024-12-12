import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IboModule } from './ibo/ibo.module';7
import { PedidoModule } from './pedido/producto.module';
import { ProductoModule } from './producto/producto.module';
@Module({
  imports: [PedidoModule, IboModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
