import * as mongoose from 'mongoose';

export const ViewerSchema = new mongoose.Schema({
  name: String,
  profession: String,
  serve: String,
  city: String,
});