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
const viewer_dto_1 = require("../dto/viewer.dto");
const viewer_service_1 = require("../services/viewer.service");
let ViewersController = class ViewersController {
    constructor(viewerService) {
        this.viewerService = viewerService;
    }
    async create(viewerDto) {
        await this.viewerService.create(viewerDto);
    }
    async update(id, viewerDto) {
        await this.viewerService.update(id, viewerDto);
    }
    async delete(id) {
        await this.viewerService.delete(id);
    }
    async findAll() {
        return this.viewerService.findAll();
    }
    async findById(id) {
        return this.viewerService.findById(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viewer_dto_1.ViewerDto]),
    __metadata("design:returntype", Promise)
], ViewersController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, viewer_dto_1.ViewerDto]),
    __metadata("design:returntype", Promise)
], ViewersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViewersController.prototype, "delete", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ViewersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViewersController.prototype, "findById", null);
ViewersController = __decorate([
    common_1.Controller('viewers'),
    __metadata("design:paramtypes", [viewer_service_1.ViewersService])
], ViewersController);
exports.ViewersController = ViewersController;
//# sourceMappingURL=viewer.controller.js.map