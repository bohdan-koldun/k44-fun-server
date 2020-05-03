"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.GameSchema = new mongoose.Schema({
    name: String,
    date: Date,
    created: { type: Date, default: Date.now },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    blitz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});
//# sourceMappingURL=game.schema.js.map