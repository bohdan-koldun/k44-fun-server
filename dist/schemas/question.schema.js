"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.QuestionSchema = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    question: String,
    answer: String,
    approved: { type: Boolean, default: false },
    expertAnswered: Boolean,
    used: Boolean,
    difficultyRate: { type: Number, min: 1, max: 10, default: 4 },
    bibleQuote: String,
    preface: String,
    media: [String],
    viewer: { type: mongoose.Schema.Types.ObjectId, ref: 'Viewer' },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
});
//# sourceMappingURL=question.schema.js.map