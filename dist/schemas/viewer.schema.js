"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ViewerSchema = new mongoose.Schema({
    name: String,
    profession: String,
    serve: String,
    city: String,
    photo: String,
    email: String,
    questions: [Object],
});
//# sourceMappingURL=viewer.schema.js.map