import * as mongoose from 'mongoose';

// Creating a mongoose schema (instrumentSchema)
export const InstrumentSchema = new mongoose.Schema({
    instrumentName: String,
    skillLevel: Number,
    genre: [String],
});

// Creating a mongoose schema (profileSchema)
export const ProfileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    description: String,
    zipCode: String,
    city: String,
    phone: String,
    status: Boolean,
    newsletter: Boolean,
    instruments: [InstrumentSchema],
});