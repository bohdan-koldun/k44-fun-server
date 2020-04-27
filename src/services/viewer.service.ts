import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Viewer } from '../interfaces/viewer.interface';
import { CreateViewerDto } from '../dto/create-viewer.dto';

@Injectable()
export class ViewersService {
  constructor(@InjectModel('Viewer') private readonly viewerModel: Model<Viewer>) {}

  async create(createViewerDto: CreateViewerDto): Promise<Viewer> {
    const createdCat = new this.viewerModel(createViewerDto);
    return createdCat.save();
  }

  async findAll(): Promise<Viewer[]> {
    return this.viewerModel.find().exec();
  }
}