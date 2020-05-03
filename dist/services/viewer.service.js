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
let ViewersService = class ViewersService {
    constructor(viewerModel, questionModel) {
        this.viewerModel = viewerModel;
        this.questionModel = questionModel;
    }
    async create(viewerDto) {
        const createdCat = new this.viewerModel(viewerDto);
        return createdCat.save();
    }
    async update(id, viewerDto) {
        return this.viewerModel.findByIdAndUpdate(id, viewerDto);
    }
    async delete(id) {
        return this.viewerModel.findByIdAndDelete(id);
    }
    async findAll() {
        const viewers = await this.viewerModel.find().exec();
        const getCount = async (viewer) => {
            const [questionsCount, lostQuestions, wonQuestions] = await Promise.all([
                this.questionModel.find({ viewer: viewer.id }).count(),
                this.questionModel.find({ expertAnswered: true, used: true }).count(),
                this.questionModel.find({ expertAnswered: false, used: true }).count(),
            ]);
            return Object.assign(Object.assign({}, viewer.toObject()), { questionsCount,
                lostQuestions,
                wonQuestions });
        };
        return Promise.all(viewers.map(getCount));
    }
    async findById(id) {
        const viewer = await this.viewerModel.findById(id);
        viewer.questions = await this.questionModel.find({ viewer: viewer.id }).exec();
        return viewer;
    }
};
ViewersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Viewer')),
    __param(1, mongoose_2.InjectModel('Question')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ViewersService);
exports.ViewersService = ViewersService;
//# sourceMappingURL=viewer.service.js.map