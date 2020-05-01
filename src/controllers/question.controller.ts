import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { QuestionDto } from '../dto/question.dto';
import { QuestionsService } from '../services/question.service';
import { Question } from '../interfaces/question.interface';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {
  }

  @Post()
  async create(@Body() questionDto: QuestionDto) {
    await this.questionService.create(questionDto);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() questionDto: QuestionDto) {
    await this.questionService.update(id, questionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    await this.questionService.delete(id);
  }


  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<Question> {
    return this.questionService.findById(id);
  }

  @Get('count')
  async count() {
    return this.questionService.count()
  }
}