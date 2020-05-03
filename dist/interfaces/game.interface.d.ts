import { Document } from 'mongoose';
export interface Game extends Document {
    readonly name: string;
    readonly date: Date;
    readonly team: string;
    readonly blitz: string[];
}
