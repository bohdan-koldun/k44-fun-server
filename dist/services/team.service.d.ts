import { Model } from 'mongoose';
import { Team } from '../interfaces/team.interface';
import { TeamDto } from '../dto/team.dto';
export declare class TeamsService {
    private readonly teamModel;
    constructor(teamModel: Model<Team>);
    create(createTeamDto: TeamDto): Promise<Team>;
    findAll(): Promise<Team[]>;
    findById(id: string): Promise<Team>;
}
