import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './interfaces/profile.interface';
import { Instrument } from './interfaces/instrument.interface';

@Injectable()
export class ProfilesService {
    // Dependency injection = imports data for use
    // Dependency injection - profile interface
    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

    async findAll(): Promise<Profile[]> {
        return await this.profileModel.find({});
    }
    
    async findSpecific(id: string): Promise<Profile> {
        return await this.profileModel.findOne({ _id: id });
    }

    async create(profile: Profile): Promise<Profile> {
        const newProfile = new this.profileModel(profile);
        return await newProfile.save();
    }

    async update(id: string, profile: Profile): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }

    async updatePassword(id: string, profile: Profile): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }
    
    async updateNewsletter(id: string, profile: Profile): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }

    async delete(id: string): Promise<Profile> {
        return await this.profileModel.findByIdAndDelete(id);
    }

    async addInstrument(id: string, instrument: Instrument): Promise<Profile> {
        // Finds the specific profile's instrument array
        const profile = await this.profileModel.findById(id);
        const instrumentArray = profile.instruments;

        // Adds the instrument to instrument array
        instrumentArray.push(instrument);
        return await profile.save();
    }

    async editInstrument(id: string, instrumentId: string, instrument: Instrument): Promise<Profile> {
        // Finds the specific profile's instrument array
        const profile = await this.profileModel.findById(id);
        const instrumentArray = profile.instruments;

        // Iterating through instrumentArray to find the index
        // where it matches with the instrumentId given.
        const index = instrumentArray.findIndex((i) => {
            return i.id == instrumentId;
        });

        // Replaces old instrument values with new instrument values
        instrumentArray[index] = instrument;
        return await profile.save();
    }

    async removeInstrument(id: string, instrumentId: string): Promise<Profile> {
        // Finds the specific profile's instrument array
        const profile = await this.profileModel.findById(id);
        const instrumentArray = profile.instruments;

        // Deleting the instrument
        // Filter creates a new array with everything except
        // the instrument that is to be deleted
        const newInstrumentArray = instrumentArray.filter((instrument) => {
            return instrument.id != instrumentId;
        });

        // Saves the new instrumentArray
        return await profile.save();
    }
}
