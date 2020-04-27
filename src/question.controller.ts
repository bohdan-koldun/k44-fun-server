import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsService} from './question.service';
import { Question } from './interfaces/question.interface';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    await this.questionService.create(createQuestionDto);
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }
}