import { Injectable, NotFoundException } from '@nestjs/common';
import { Pedido } from '@prisma/client';
import { PedidoDao } from 'src/dao/pedido.dao';
@Injectable()
export class PedidoService {
  constructor(private readonly pedidoDao: PedidoDao) {}

  async getAllPedidos(): Promise<Pedido[]> {
    return this.pedidoDao.findAllPedidos();
  }

  async getPedidoById(id: number): Promise<Pedido> {
    const pedido = await this.pedidoDao.findOnePedido(id);
    if (!pedido) {
      throw new NotFoundException(`Pedido with ID ${id} not found`);
    }
    return pedido;
  }

  async createPedido(data: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoDao.createPedido(data);
  }

  async updatePedido(id: number, data: Partial<Pedido>): Promise<Pedido> {
    const pedido = await this.getPedidoById(id);
    return this.pedidoDao.updatePedido(pedido.id_pedido, data);
  }

  async deletePedido(id: number): Promise<Pedido> {
    const pedido = await this.getPedidoById(id);
    return this.pedidoDao.deletePedido(pedido.id_pedido);
  }
}