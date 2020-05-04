import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { QuestionDto } from '../dto/question.dto';
import { QuestionsService } from '../services/question.service';
import { Question } from '../interfaces/question.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {
  }

  @Post()
  async create(@Body() questionDto: QuestionDto) {
    await this.questionService.create(questionDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id, @Body() questionDto: QuestionDto) {
    await this.questionService.update(id, questionDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id) {
    await this.questionService.delete(id);
  }


  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findById(@Param('id') id): Promise<Question> {
    return this.questionService.findById(id);
  }

  @Get('count')
  async count() {
    return this.questionService.count()
  }
}