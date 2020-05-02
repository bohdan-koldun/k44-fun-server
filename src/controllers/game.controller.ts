import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GameDto } from '../dto/game.dto';
import { GamesService } from '../services/game.service';
import { Game } from '../interfaces/game.interface';

@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Post()
  async create(@Body() gameDto: GameDto) {
    await this.gameService.create(gameDto);
  }

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<Game> {
    return this.gameService.findById(id);
  }
}