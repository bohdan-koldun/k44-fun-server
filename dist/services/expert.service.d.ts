import { Model } from 'mongoose';
import { Expert } from '../interfaces/expert.interface';
import { ExpertDto } from '../dto/expert.dto';
export declare class ExpertsService {
    private readonly expertModel;
    constructor(expertModel: Model<Expert>);
    create(createExpertDto: ExpertDto): Promise<Expert>;
    findAll(): Promise<Expert[]>;
}
