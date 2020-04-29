import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateExpertDto } from '../dto/create-expert.dto';
import { ExpertsService } from '../services/expert.service';
import { Expert } from '../interfaces/expert.interface';

@Controller('experts')
export class ExpertsController {
  constructor(private readonly expertService: ExpertsService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateExpertDto) {
    await this.expertService.create(createQuestionDto);
  }

  @Get()
  async findAll(): Promise<Expert[]> {
    return this.expertService.findAll();
  }
}