import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from '../interfaces/team.interface';
import { TeamDto } from '../dto/team.dto';
import { Question } from '../interfaces/question.interface';

@Injectable()
export class TeamsService {
  constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) {}

  async create(createTeamDto: TeamDto): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().populate(["captain", "experts"]).exec();
  }

  async findById(id: string): Promise<Team> {
    return this.teamModel.findById(id).populate(["captain", "experts"]);
  }

}