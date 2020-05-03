import { GameDto } from '../dto/game.dto';
import { GamesService } from '../services/game.service';
import { Game } from '../interfaces/game.interface';
export declare class GamesController {
    private readonly gameService;
    constructor(gameService: GamesService);
    create(gameDto: GameDto): Promise<void>;
    findAll(): Promise<Game[]>;
    findById(id: any): Promise<Game>;
}
