// ibo.dao.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Ibo } from '@prisma/client';
@Injectable()
export class IboDao {
  constructor(private readonly prisma: DatabaseService) {}

  async findAll(): Promise<Ibo[]> {
    return this.prisma.ibo.findMany({ include: { PedidoRecibe: true } });
  }

  async findOne(id: number): Promise<Ibo | null> {
    return this.prisma.ibo.findUnique({
      where: { id_ibo: id },
      include: { PedidoRecibe: true },
    });
  }

  async create(data: any): Promise<any> {

    return this.prisma.ibo.create({
      data,
      include: { PedidoRecibe: true },
    });
  }

  async update(id: number, data: Partial<Ibo>): Promise<Ibo> {
    return this.prisma.ibo.update({
      where: { id_ibo: id },
      data,
      include: { PedidoRecibe: true },
    });
  }

  async delete(id: number): Promise<Ibo> {
    return this.prisma.ibo.delete({
      where: { id_ibo: id },
      include: { PedidoRecibe: true },
    });
  }
}
