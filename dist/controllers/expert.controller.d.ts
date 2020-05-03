import { ExpertDto } from '../dto/expert.dto';
import { ExpertsService } from '../services/expert.service';
import { Expert } from '../interfaces/expert.interface';
export declare class ExpertsController {
    private readonly expertService;
    constructor(expertService: ExpertsService);
    create(expertDto: ExpertDto): Promise<void>;
    findAll(): Promise<Expert[]>;
}
