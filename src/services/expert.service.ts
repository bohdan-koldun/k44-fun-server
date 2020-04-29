import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expert } from '../interfaces/expert.interface';
import { CreateExpertDto } from '../dto/create-expert.dto';

@Injectable()
export class ExpertsService {
  constructor(@InjectModel('Expert') private readonly expertModel: Model<Expert>) {}

  async create(createExpertDto: CreateExpertDto): Promise<Expert> {
    const createdCat = new this.expertModel(createExpertDto);
    return createdCat.save();
  }

  async findAll(): Promise<Expert[]> {
    return this.expertModel.find().exec();
  }
}