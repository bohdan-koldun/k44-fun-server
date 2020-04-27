import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './interfaces/question.interface';
import { CreateQuestionDto} from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel('Question') private readonly questionModel: Model<Question >) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question > {
    const createdCat = new this.questionModel(createQuestionDto);
    return createdCat.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }
}