import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import {
  TeamSchema,
  ExpertSchema,
  ViewerSchema,
  QuestionSchema,
  GameSchema,
  UserSchema,
} from './schemas';
import { QuestionsController } from './controllers/question.controller';
import { QuestionsService } from './services/question.service';
import { ViewersService } from './services/viewer.service';
import { ViewersController } from './controllers/viewer.controller';
import { ExpertsController } from './controllers/expert.controller';
import { ExpertsService } from './services/expert.service';
import { TeamsController } from './controllers/team.controller';
import { TeamsService } from './services/team.service';
import { GamesController } from './controllers/game.controller';
import { GamesService } from './services/game.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:kmJMw73pt0Eh2JNn@cluster0-mkxqb.mongodb.net/what_where_when_k44'),
    MongooseModule.forFeature([
      { name: 'Question', schema: QuestionSchema },
      { name: 'Viewer', schema: ViewerSchema },
      { name: 'Expert', schema: ExpertSchema },
      { name: 'Team', schema: TeamSchema },
      { name: 'Game', schema: GameSchema },
      { name: 'User', schema: UserSchema },
    ]),
    AuthModule,
  ],
  controllers: [
    QuestionsController, ViewersController,
    ExpertsController, TeamsController,
    GamesController,
  ],
  providers: [
    QuestionsService, ViewersService,
    ExpertsService, TeamsService,
    GamesService,
  ],
})
export class AppModule {
}
