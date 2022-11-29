import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfileDTO } from './dtos/create-profile.dto';
import { InstrumentDTO } from './dtos/instrument-profile.dto';
import { UpdateNewsletterProfileDTO } from './dtos/update-newsletter-profile.dto';
import { UpdatePasswordProfileDTO } from './dtos/update-password-profile.dto';
import { UpdateProfileDTO } from './dtos/update-profile.dto';
import { Profile, ProfileDocument } from './schemas/profile.schema';

@Injectable()
export class ProfilesService {
    // Dependency injection = imports data for use
    // Dependency injection - profile interface
    constructor(@InjectModel(Profile.name) private profileModel: Model<ProfileDocument>) {}

    async findAll(): Promise<Profile[]> {
        return await this.profileModel.find({});
    }
    
    async findSpecific(id: string): Promise<Profile> {
        return await this.profileModel.findOne({ _id: id });
    }

    async create(profile: CreateProfileDTO): Promise<Profile> {
        const newProfile = new this.profileModel(profile);
        return await newProfile.save();
    }

    async update(id: string, profile: UpdateProfileDTO): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }

    async updatePassword(id: string, profile: UpdatePasswordProfileDTO): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }
    
    async updateNewsletter(id: string, profile: UpdateNewsletterProfileDTO): Promise<Profile> {
        // { new : true} = creates a new document if it doesn´t already exist
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }

    async delete(id: string): Promise<Profile> {
        return await this.profileModel.findByIdAndDelete(id);
    }

    async addInstrument(id: string, instrument: InstrumentDTO): Promise<Profile> {
        // Finds the specific profile's instrument array
        const profile = await this.profileModel.findById(id);
        const instrumentArray = profile.instruments;

        // Adds the instrument to instrument array
        instrumentArray.push(instrument);
        return await profile.save();
    }

    async editInstrument(id: string, instrumentId: string, instrument: InstrumentDTO): Promise<Profile> {
        // Finds the specific profile's instrument array
        const profile = await this.profileModel.findById(id);
        const instrumentArray = profile.instruments;

        // Iterating through instrumentArray to find the index
        // where it matches with the instrumentId given.
        const index = instrumentArray.findIndex((i:any) => {
            return i._id == instrumentId;
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
        const newInstrumentArray = instrumentArray.filter((i:any) => {
            return i._id != instrumentId;
        });

        profile.instruments = newInstrumentArray
        // Saves the new instrumentArray
        return await profile.save();
    }
}
