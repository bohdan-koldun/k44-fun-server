import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  name: String,
  date: Date,
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});