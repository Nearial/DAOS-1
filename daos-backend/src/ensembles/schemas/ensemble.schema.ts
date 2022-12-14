import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Profile } from 'src/profiles/schemas/profile.schema';

export type EnsembleDocument = Ensemble & Document;

@Schema()
export class Posts {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    instrument: string;

    @Prop()
    minimumSkillLevel: string;

    @Prop()
    genre: [string]
}

@Schema()
export class Ensemble {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    website: string;

    @Prop()
    city: string;

    @Prop()
    activeMusicians: string;

    @Prop()
    practiceFrequency: string;

    @Prop()
    continuously: Boolean;

    @Prop()
    projectBased: Boolean;

    @Prop()
    genre: [];

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Profile.name})
    admin: Profile;

    @Prop( [Posts] )
    posts: Posts[]
}

export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);