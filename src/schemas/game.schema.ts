import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  name: String,
  date: Date,
  created: { type : Date, default: Date.now },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  blitz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});