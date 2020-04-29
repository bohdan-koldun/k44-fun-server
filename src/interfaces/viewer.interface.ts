import { Document } from 'mongoose';

export interface Viewer extends Document {
  readonly name: string;
  readonly profession: string;
  readonly serve: string;
  readonly city: string;
  readonly photo: string;
  readonly email: string;
}