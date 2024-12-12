// ibo.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Ibo } from '@prisma/client';
import { IboDao } from 'src/dao/ibo.dao';
@Injectable()
export class IboService {
  constructor(private readonly iboDao: IboDao) {}

  async getAll(): Promise<Ibo[]> {
    return this.iboDao.findAll();
  }

  async getById(id: number): Promise<Ibo> {
    const ibo = await this.iboDao.findOne(id);
    if (!ibo) {
      throw new NotFoundException(`Ibo with ID ${id} not found`);
    }
    return ibo;
  }

  async create(data: Partial<Ibo>): Promise<Ibo> {
    return this.iboDao.create(data);
  }

  async update(id: number, data: Partial<Ibo>): Promise<Ibo> {
    const ibo = await this.getById(id);
    return this.iboDao.update(ibo.id_ibo, data);
  }

  async delete(id: number): Promise<Ibo> {
    const ibo = await this.getById(id);
    return this.iboDao.delete(ibo.id_ibo);
  }
}
