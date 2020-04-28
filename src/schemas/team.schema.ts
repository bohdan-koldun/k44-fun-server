import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: String,
  created: Date,
  captain: { type: mongoose.Schema.Types.ObjectId, ref: 'Expert' },
  teammates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expert' }],
});