"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TeamSchema = new mongoose.Schema({
    name: String,
    created: { type: Date, default: Date.now },
    captain: { type: mongoose.Schema.Types.ObjectId, ref: 'Expert' },
    experts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expert' }],
});
//# sourceMappingURL=team.schema.js.map