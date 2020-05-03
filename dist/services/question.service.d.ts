import { Model } from 'mongoose';
import { Question } from '../interfaces/question.interface';
import { QuestionDto } from '../dto/question.dto';
export declare class QuestionsService {
    private readonly questionModel;
    constructor(questionModel: Model<Question>);
    create(questionDto: QuestionDto): Promise<Question>;
    update(id: string, questionDto: QuestionDto): Promise<Question>;
    delete(id: string): Promise<Question>;
    findAll(): Promise<Question[]>;
    findById(id: string): Promise<Question>;
    count(): Promise<number>;
}
