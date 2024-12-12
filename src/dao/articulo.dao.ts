// articulo.dao.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Articulo } from '@prisma/client';

@Injectable()
export class ArticuloDao {
  constructor(private readonly prisma: DatabaseService) {}

  // CDatabaseServiceUD for Articulo
  async findAllArticulos(): Promise<Articulo[]> {
    return this.prisma.articulo.findMany();
  }

  async findOneArticulo(id: number): Promise<Articulo | null> {
    return this.prisma.articulo.findUnique({
      where: { id_articulo: id },
    });
  }

  async createArticulo(data: any): Promise<Articulo> {
    return this.prisma.articulo.create({
      data,
    });
  }

  async updateArticulo(id: number, data: any): Promise<Articulo> {
    return this.prisma.articulo.update({
      where: { id_articulo: id },
      data,
    });
  }

  async deleteArticulo(id: number): Promise<Articulo> {
    return this.prisma.articulo.delete({
      where: { id_articulo: id },
    });
  }
}