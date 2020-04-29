import { Document } from 'mongoose';

export interface Team extends Document {
  readonly name: string;
  readonly date: Date;
  readonly team: string[];
}