import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Instrument {
    @Prop()
    instrumentName: String;

    @Prop()
    skillLevel: string;

    @Prop()
    genre: [String];
}

@Schema()
export class Profile {
    @Prop()
    firstName: String;

    @Prop()
    lastName: String;

    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    description: String;

    @Prop()
    zipCode: String;

    @Prop()
    city: String;

    @Prop()
    phone: String;

    @Prop()
    status: Boolean;

    @Prop()
    newsletter: Boolean;

    @Prop( [Instrument] )
    instruments: Instrument[]
}

export const ProfileSchema = SchemaFactory.createForClass(Profile)