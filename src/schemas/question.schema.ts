import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String,
  difficultyRate: { type: Number, min: 1, max: 10, default: 4 },
  bibleQuote: String,
  preface: String,
  media: [String],
  viewer: { type: mongoose.Schema.Types.ObjectId, ref: 'Viewer'},
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
});