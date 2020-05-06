import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from '../interfaces/question.interface';
import { QuestionDto } from '../dto/question.dto';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel('Question') private readonly questionModel: Model<Question>) {
  }

  async create(questionDto: QuestionDto): Promise<Question> {
    const createdCat = new this.questionModel(questionDto);
    return createdCat.save();
  }

  async update(id: string, questionDto: QuestionDto): Promise<Question> {
    return this.questionModel.findByIdAndUpdate(id, questionDto);
  }

  async delete(id: string) {
    return this.questionModel.findByIdAndDelete(id);
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find({ used: { $ne: true } }).sort([['created', -1]]).populate('viewer').exec();
  }

  async findById(id: string): Promise<Question> {
    return this.questionModel.findById(id);
  }

  async count() {
    const c = await this.questionModel.count({ name: 'ddd' })
    return c
  }
}