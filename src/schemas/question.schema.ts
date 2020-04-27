import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String,
  difficultyRate: Number,
  bibleQuote: String,
  viewer: { type: mongoose.Schema.Types.ObjectId, ref: 'Viewer'}
});