import { Model } from 'mongoose';
import { Game } from '../interfaces/game.interface';
import { GameDto } from '../dto/game.dto';
import { Question } from '../interfaces/question.interface';
import { Team } from '../interfaces/team.interface';
export declare class GamesService {
    private readonly gameModel;
    private readonly questionModel;
    private readonly teamModel;
    constructor(gameModel: Model<Game>, questionModel: Model<Question>, teamModel: Model<Team>);
    create(gameDto: GameDto): Promise<Game>;
    findAll(): Promise<Game[]>;
    findById(id: string): Promise<Game>;
}
