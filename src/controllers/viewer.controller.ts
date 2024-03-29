import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { ViewerDto } from '../dto/viewer.dto';
import { ViewersService } from '../services/viewer.service';

@Controller('viewers')
export class ViewersController {
  constructor(private readonly viewerService: ViewersService) {}

  @Post()
  async create(@Body() viewerDto: ViewerDto) {
    await this.viewerService.create(viewerDto);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() viewerDto: ViewerDto) {
    await this.viewerService.update(id, viewerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    await this.viewerService.delete(id);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.viewerService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id) {
    return this.viewerService.findById(id);
  }
}