"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ExpertSchema = new mongoose.Schema({
    name: String,
    photo: String,
    age: Number,
    profession: String,
    serve: String,
    city: String,
    fromCity: String,
    family: String,
    church: String,
    interestingFacts: [String],
    hobbies: [String],
    others: [String],
    created: { type: Date, default: Date.now },
});
//# sourceMappingURL=expert.schema.js.map