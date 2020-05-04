import { Document } from 'mongoose';

export interface Team extends Document {
  readonly name: string;
  readonly created: Date;
  readonly captain: string;
  readonly experts: string[];
}