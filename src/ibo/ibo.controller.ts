// ibo.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IboService } from './ibo.service';
import { Ibo } from '@prisma/client';
@Controller('ibo')
export class IboController {
  constructor(private readonly iboService: IboService) {}

  @Get()
  async findAll(): Promise<Ibo[]> {
    return this.iboService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ibo> {
    return this.iboService.getById(Number(id));
  }

  @Post()
  async create(@Body() data: Partial<Ibo>): Promise<Ibo> {
    return this.iboService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Ibo>): Promise<Ibo> {
    return this.iboService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Ibo> {
    return this.iboService.delete(Number(id));
  }
}
