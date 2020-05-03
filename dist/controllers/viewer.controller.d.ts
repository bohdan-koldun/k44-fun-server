import { ViewerDto } from '../dto/viewer.dto';
import { ViewersService } from '../services/viewer.service';
export declare class ViewersController {
    private readonly viewerService;
    constructor(viewerService: ViewersService);
    create(viewerDto: ViewerDto): Promise<void>;
    update(id: any, viewerDto: ViewerDto): Promise<void>;
    delete(id: any): Promise<void>;
    findAll(): Promise<any[]>;
    findById(id: any): Promise<Record<string, any>>;
}
