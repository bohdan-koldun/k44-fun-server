import { TeamDto } from '../dto/team.dto';
import { TeamsService } from '../services/team.service';
import { Team } from '../interfaces/team.interface';
export declare class TeamsController {
    private readonly teamService;
    constructor(teamService: TeamsService);
    create(teamDto: TeamDto): Promise<void>;
    findAll(): Promise<Team[]>;
    findById(id: any): Promise<Team>;
}
