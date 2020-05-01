import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Viewer } from '../interfaces/viewer.interface';
import { Question } from '../interfaces/question.interface';
import { ViewerDto } from '../dto/viewer.dto';

@Injectable()
export class ViewersService {
  constructor(
    @InjectModel('Viewer') private readonly viewerModel: Model<Viewer>,
    @InjectModel('Question') private readonly questionModel: Model<Question>,
  ) {
  }

  async create(viewerDto: ViewerDto): Promise<Viewer> {
    const createdCat = new this.viewerModel(viewerDto);
    return createdCat.save();
  }

  async update(id: string, viewerDto: ViewerDto): Promise<Viewer> {
    return this.viewerModel.findByIdAndUpdate(id, viewerDto);
  }

  async delete(id: string) {
    return this.viewerModel.findByIdAndDelete(id);
  }

  async findAll(): Promise<any[]> {
    const viewers = await this.viewerModel.find().exec();

    const getCount = async viewer => {
      const [questionsCount, lostQuestions, wonQuestions] = await Promise.all([
        this.questionModel.find({ viewer: viewer.id }).count(),
        this.questionModel.find({ expertAnswered: true, used: true }).count(),
        this.questionModel.find({ expertAnswered: false, used: true }).count(),
      ]);

      return {
        ...viewer.toObject(),
        questionsCount,
        lostQuestions,
        wonQuestions,
      };
    };

    return Promise.all(viewers.map(getCount));
  }

  async findById(id: string): Promise<Record<string, any>> {
    const viewer = await this.viewerModel.findById(id) as any;

    viewer.questions = await this.questionModel.find({ viewer: viewer.id }).exec();

    return viewer;
  }
}