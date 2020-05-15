import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TeamDto } from '../dto/team.dto';
import { TeamsService } from '../services/team.service';
import { Team } from '../interfaces/team.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @Post()
  async create(@Body() teamDto: TeamDto) {
    await this.teamService.create(teamDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findById(@Param('id') id): Promise<Team> {
    return this.teamService.findById(id);
  }
}