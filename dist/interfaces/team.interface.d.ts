import { Document } from 'mongoose';
export interface Team extends Document {
    name: string;
    readonly created: Date;
    readonly captain: Date;
    readonly experts: string[];
}
