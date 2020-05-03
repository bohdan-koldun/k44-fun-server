"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schemas_1 = require("./schemas");
const question_controller_1 = require("./controllers/question.controller");
const question_service_1 = require("./services/question.service");
const viewer_service_1 = require("./services/viewer.service");
const viewer_controller_1 = require("./controllers/viewer.controller");
const expert_controller_1 = require("./controllers/expert.controller");
const expert_service_1 = require("./services/expert.service");
const team_controller_1 = require("./controllers/team.controller");
const team_service_1 = require("./services/team.service");
const game_controller_1 = require("./controllers/game.controller");
const game_service_1 = require("./services/game.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:kmJMw73pt0Eh2JNn@cluster0-mkxqb.mongodb.net/what_where_when_k44'),
            mongoose_1.MongooseModule.forFeature([
                { name: 'Question', schema: schemas_1.QuestionSchema },
                { name: 'Viewer', schema: schemas_1.ViewerSchema },
                { name: 'Expert', schema: schemas_1.ExpertSchema },
                { name: 'Team', schema: schemas_1.TeamSchema },
                { name: 'Game', schema: schemas_1.GameSchema },
            ]),
        ],
        controllers: [
            question_controller_1.QuestionsController, viewer_controller_1.ViewersController,
            expert_controller_1.ExpertsController, team_controller_1.TeamsController,
            game_controller_1.GamesController,
        ],
        providers: [
            question_service_1.QuestionsService, viewer_service_1.ViewersService,
            expert_service_1.ExpertsService, team_service_1.TeamsService,
            game_service_1.GamesService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map