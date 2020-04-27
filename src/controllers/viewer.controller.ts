import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateViewerDto } from '../dto/create-viewer.dto';
import { ViewersService } from '../services/viewer.service';
import { Viewer } from '../interfaces/viewer.interface';

@Controller('viewers')
export class ViewersController {
  constructor(private readonly viewerService: ViewersService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateViewerDto) {
    await this.viewerService.create(createQuestionDto);
  }

  @Get()
  async findAll(): Promise<Viewer[]> {
    return this.viewerService.findAll();
  }
}