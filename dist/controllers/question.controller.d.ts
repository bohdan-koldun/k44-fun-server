import { QuestionDto } from '../dto/question.dto';
import { QuestionsService } from '../services/question.service';
import { Question } from '../interfaces/question.interface';
export declare class QuestionsController {
    private readonly questionService;
    constructor(questionService: QuestionsService);
    create(questionDto: QuestionDto): Promise<void>;
    update(id: any, questionDto: QuestionDto): Promise<void>;
    delete(id: any): Promise<void>;
    findAll(): Promise<Question[]>;
    findById(id: any): Promise<Question>;
    count(): Promise<number>;
}
