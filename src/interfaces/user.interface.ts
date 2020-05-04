import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly created: Date;
  readonly password: string;
  readonly email: string;
  readonly roles: string[];
}