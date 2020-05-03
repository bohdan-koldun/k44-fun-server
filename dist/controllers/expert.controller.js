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
const common_1 = require("@nestjs/common");
const expert_dto_1 = require("../dto/expert.dto");
const expert_service_1 = require("../services/expert.service");
let ExpertsController = class ExpertsController {
    constructor(expertService) {
        this.expertService = expertService;
    }
    async create(expertDto) {
        await this.expertService.create(expertDto);
    }
    async findAll() {
        return this.expertService.findAll();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expert_dto_1.ExpertDto]),
    __metadata("design:returntype", Promise)
], ExpertsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpertsController.prototype, "findAll", null);
ExpertsController = __decorate([
    common_1.Controller('experts'),
    __metadata("design:paramtypes", [expert_service_1.ExpertsService])
], ExpertsController);
exports.ExpertsController = ExpertsController;
//# sourceMappingURL=expert.controller.js.map