import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: String,
  created: { type : Date, default: Date.now },
  captain: { type: mongoose.Schema.Types.ObjectId, ref: 'Expert' },
  teammates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expert' }],
});