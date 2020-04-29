import { Document } from 'mongoose';

export interface Expert extends Document {
  readonly name: string;
  readonly profession: string;
  readonly serve: string;
  readonly city: string;
  readonly hobbies: string[];
}