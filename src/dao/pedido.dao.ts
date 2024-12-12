// pedido.dao.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Pedido } from '@prisma/client';
import { MetodoDePago } from '@prisma/client';
import { DetallePedido } from '@prisma/client';
import { Direccion } from '@prisma/client';
import { Contacto } from '@prisma/client';
import { Direccion_entrega } from '@prisma/client';

@Injectable()
export class PedidoDao {
  constructor(private readonly prisma: DatabaseService) {}

  // CRUD for Pedido
  async findAllPedidos(): Promise<Pedido[]> {
    return this.prisma.pedido.findMany({
      include: {
        MetodoDePago: true,
        DireccionEntrega: true,
        DetallePedido: true,
        Ibo: true,
      },
    });
  }

  async findOnePedido(id: number): Promise<Pedido | null> {
    return this.prisma.pedido.findUnique({
      where: { id_pedido: id },
      include: {
        MetodoDePago: true,
        DireccionEntrega: true,
        DetallePedido: true,
        Ibo: true,
      },
    });
  }

  async createPedido(data:any): Promise<Pedido> {
    return this.prisma.pedido.create({
      data,
      include: {
        MetodoDePago: true,
        DireccionEntrega: true,
        DetallePedido: true,
        Ibo: true,
      },
    });
  }

  async updatePedido(id: number, data:any): Promise<Pedido> {
    return this.prisma.pedido.update({
      where: { id_pedido: id },
      data,
      include: {
        MetodoDePago: true,
        DireccionEntrega: true,
        DetallePedido: true,
        Ibo: true,
      },
    });
  }

  async deletePedido(id: number): Promise<Pedido> {
    return this.prisma.pedido.delete({
      where: { id_pedido: id },
      include: {
        MetodoDePago: true,
        DireccionEntrega: true,
        DetallePedido: true,
        Ibo: true,
      },
    });
  }
}