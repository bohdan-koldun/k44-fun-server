import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expert } from '../interfaces/expert.interface';
import { ExpertDto } from '../dto/expert.dto';

@Injectable()
export class ExpertsService {
  constructor(@InjectModel('Expert') private readonly expertModel: Model<Expert>) {}

  async create(createExpertDto: ExpertDto): Promise<Expert> {
    const createdExpert = new this.expertModel(createExpertDto);
    return createdExpert.save();
  }

  async findAll(): Promise<Expert[]> {
    return this.expertModel.find().exec();
  }
}