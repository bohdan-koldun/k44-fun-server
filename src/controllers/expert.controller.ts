import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExpertDto } from '../dto/expert.dto';
import { ExpertsService } from '../services/expert.service';
import { Expert } from '../interfaces/expert.interface';

@Controller('experts')
export class ExpertsController {
  constructor(private readonly expertService: ExpertsService) {}

  @Post()
  async create(@Body() expertDto: ExpertDto) {
    await this.expertService.create(expertDto);
  }

  @Get()
  async findAll(): Promise<Expert[]> {
    return this.expertService.findAll();
  }
}