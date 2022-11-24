import * as mongoose from 'mongoose';

// Creating a mongoose schema (ensembleSchema)
export const EnsembleSchema = new mongoose.Schema({
    name: String,
    description: String,
    website: String,
    zipCode: String,
    city: String,
    activeMusicians: String,
    practiceFrequency: String,
    continuously: Boolean,
    projectBased: Boolean,
    genre: [],
    admin: [{type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}]
});