import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PedidoService } from './producto.service';
import { Pedido } from '@prisma/client';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  async findAll(): Promise<Pedido[]> {
    return this.pedidoService.getAllPedidos();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pedido> {
    return this.pedidoService.getPedidoById(Number(id));
  }

  @Post()
  async create(@Body() data: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoService.createPedido(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoService.updatePedido(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Pedido> {
    return this.pedidoService.deletePedido(Number(id));
  }
}