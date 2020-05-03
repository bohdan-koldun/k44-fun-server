"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let GamesService = class GamesService {
    constructor(gameModel, questionModel, teamModel) {
        this.gameModel = gameModel;
        this.questionModel = questionModel;
        this.teamModel = teamModel;
    }
    async create(gameDto) {
        const createdGame = new this.gameModel(gameDto);
        return createdGame.save();
    }
    async findAll() {
        return this.gameModel.find().populate(['team']).exec();
    }
    async findById(id) {
        const game = await this.gameModel.findById(id).populate(['team']);
        const questions = await this.questionModel.find({ game: game.id }).populate('viewer').exec();
        const team = await this.teamModel.findById(game.team['_id']).populate(["captain", "experts"]);
        return Object.assign(Object.assign({}, game.toObject()), { team: team.toObject(), questions: questions.filter(question => !game.blitz.includes(question.id)), blitz: questions.filter(question => game.blitz.includes(question.id)) });
    }
};
GamesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Game')),
    __param(1, mongoose_2.InjectModel('Question')),
    __param(2, mongoose_2.InjectModel('Team')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=game.service.js.map