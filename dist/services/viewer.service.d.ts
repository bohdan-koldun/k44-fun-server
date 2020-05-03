import { Model } from 'mongoose';
import { Viewer } from '../interfaces/viewer.interface';
import { Question } from '../interfaces/question.interface';
import { ViewerDto } from '../dto/viewer.dto';
export declare class ViewersService {
    private readonly viewerModel;
    private readonly questionModel;
    constructor(viewerModel: Model<Viewer>, questionModel: Model<Question>);
    create(viewerDto: ViewerDto): Promise<Viewer>;
    update(id: string, viewerDto: ViewerDto): Promise<Viewer>;
    delete(id: string): Promise<Viewer>;
    findAll(): Promise<any[]>;
    findById(id: string): Promise<Record<string, any>>;
}
