import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from '../interfaces/game.interface';
import { GameDto } from '../dto/game.dto';
import { Question } from '../interfaces/question.interface';
import { Team } from '../interfaces/team.interface';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel('Game') private readonly gameModel: Model<Game>,
    @InjectModel('Question') private readonly questionModel: Model<Question>,
    @InjectModel('Team') private readonly teamModel: Model<Team>,
  ) {
  }

  async create(gameDto: GameDto): Promise<Game> {
    const createdGame = new this.gameModel(gameDto);
    return createdGame.save();
  }

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().populate(['team']).exec();
  }

  async findById(id: string): Promise<Game> {
    const game = await this.gameModel.findById(id).populate(['team', { path: 'questions', populate: { path: 'viewer' } }, { path: 'blitz', populate: { path: 'viewer' } }]);
    const team = await this.teamModel.findById(game.team['_id']).populate(["captain", "experts"])

    return {
      ...game.toObject(),
      team: team.toObject(),
    };
  }
}