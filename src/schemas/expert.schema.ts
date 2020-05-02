import * as mongoose from 'mongoose';

export const ExpertSchema = new mongoose.Schema({
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
  created: { type : Date, default: Date.now },
});
