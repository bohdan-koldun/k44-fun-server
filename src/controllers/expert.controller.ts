import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ExpertDto } from '../dto/expert.dto';
import { ExpertsService } from '../services/expert.service';
import { Expert } from '../interfaces/expert.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('experts')
export class ExpertsController {
  constructor(private readonly expertService: ExpertsService) {}

  @Post()
  async create(@Body() expertDto: ExpertDto) {
    await this.expertService.create(expertDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Expert[]> {
    return this.expertService.findAll();
  }
}