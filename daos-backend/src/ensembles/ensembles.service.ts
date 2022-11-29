import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ensemble } from './interfaces/ensemble.interface';

@Injectable()
export class EnsemblesService {
    // Dependency injection = imports data for use
    // Dependency injection - ensemble interface
    constructor(@InjectModel('Ensemble') private readonly ensembleModel: Model<Ensemble>) {}

    async findAll(): Promise<Ensemble[]> {
        return await this.ensembleModel.find({}).populate('admin');
    }

    async findSpecific(id: string): Promise<Ensemble> {
        return await this.ensembleModel.findOne({ _id: id }).populate('admin');
    }
    
    async create(ensemble: Ensemble): Promise<Ensemble> {
        const newEnsemble = new this.ensembleModel(ensemble);
        return await newEnsemble.save();
    }

    async update(id: string, ensemble: Ensemble): Promise<Ensemble> {
        return await this.ensembleModel.findByIdAndUpdate(id, ensemble, {new : true});
    }

    async delete(id: string): Promise<Ensemble> {
        return await this.ensembleModel.findByIdAndDelete(id)
    }
}