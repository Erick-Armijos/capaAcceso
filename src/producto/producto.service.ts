import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticuloDao } from 'src/dao/articulo.dao';
import { Articulo } from '@prisma/client';

@Injectable()
export class ArticuloService {
  constructor(private readonly articuloDao: ArticuloDao) {}

  async getAllArticulos(): Promise<Articulo[]> {
    return this.articuloDao.findAllArticulos();
  }

  async getArticuloById(id: number): Promise<Articulo> {
    const articulo = await this.articuloDao.findOneArticulo(id);
    if (!articulo) {
      throw new NotFoundException(`Articulo with ID ${id} not found`);
    }
    return articulo;
  }

  async createArticulo(data: Partial<Articulo>): Promise<Articulo> {
    return this.articuloDao.createArticulo(data);
  }

  async updateArticulo(id: number, data: Partial<Articulo>): Promise<Articulo> {
    const articulo = await this.getArticuloById(id);
    return this.articuloDao.updateArticulo(articulo.id_articulo, data);
  }

  async deleteArticulo(id: number): Promise<Articulo> {
    const articulo = await this.getArticuloById(id);
    return this.articuloDao.deleteArticulo(articulo.id_articulo);
  }
}