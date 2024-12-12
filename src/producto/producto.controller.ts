import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ArticuloService } from './producto.service';
import { Articulo } from '@prisma/client';

@Controller('articulo')
export class ArticuloController {
  constructor(private readonly articuloService: ArticuloService) {}

  @Get()
  async findAll(): Promise<Articulo[]> {
    return this.articuloService.getAllArticulos();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Articulo> {
    return this.articuloService.getArticuloById(Number(id));
  }

  @Post()
  async create(@Body() data: Partial<Articulo>): Promise<Articulo> {
    return this.articuloService.createArticulo(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Articulo>): Promise<Articulo> {
    return this.articuloService.updateArticulo(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Articulo> {
    return this.articuloService.deleteArticulo(Number(id));
  }
}