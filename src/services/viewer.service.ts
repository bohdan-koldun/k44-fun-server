import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Viewer } from '../interfaces/viewer.interface';
import { ViewerDto } from '../dto/viewer.dto';

@Injectable()
export class ViewersService {
  constructor(@InjectModel('Viewer') private readonly viewerModel: Model<Viewer>) {
  }

  async create(viewerDto: ViewerDto): Promise<Viewer> {
    const createdCat = new this.viewerModel(viewerDto);
    return createdCat.save();
  }

  async update(id: string, viewerDto: ViewerDto): Promise<Viewer> {
    return this.viewerModel.findByIdAndUpdate(id, viewerDto);
  }

  async delete(id: string){
    return this.viewerModel.findByIdAndDelete(id)
  }

  async findAll(): Promise<Viewer[]> {
    return this.viewerModel.find().exec();
  }

  async findById(id: string): Promise<Viewer> {
    return this.viewerModel.findById(id);
  }
}