import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddEnsembleDTO } from './dtos/addEnsemble.dto';
import { EditEnsembleDTO } from './dtos/editEnsemble.dto';
import { EnsemblePostsDTO } from './dtos/ensemble-Posts.dto';
import { Ensemble, EnsembleDocument } from './schemas/ensemble.schema';

@Injectable()
export class EnsemblesService {
    // Dependency injection = imports data for use
    // Dependency injection - ensemble interface
    constructor(@InjectModel(Ensemble.name) private readonly ensembleModel: Model<EnsembleDocument>) {}

    async findAll(): Promise<Ensemble[]> {
        return await this.ensembleModel.find({}).populate('admin');
    }

    async findSpecific(id: string): Promise<Ensemble> {
        return await this.ensembleModel.findOne({ _id: id }).populate('admin');
    }
    
    async create(ensemble: AddEnsembleDTO): Promise<Ensemble> {
        const newEnsemble = new this.ensembleModel(ensemble);
        return await newEnsemble.save();
    }

    async update(id: string, ensemble: EditEnsembleDTO): Promise<Ensemble> {
        return await this.ensembleModel.findByIdAndUpdate(id, ensemble, {new : true});
    }

    async delete(id: string): Promise<Ensemble> {
        return await this.ensembleModel.findByIdAndDelete(id)
    }

    async addPost(id: string, post: EnsemblePostsDTO): Promise<Ensemble> {
        const ensemble = await this.ensembleModel.findById(id);
        const postArray = ensemble.posts;

        postArray.push(post);
        return await ensemble.save();
    }

    async editPost(id: string, postId: string, post: EnsemblePostsDTO): Promise<Ensemble> {
        const ensemble = await this.ensembleModel.findById(id);
        const postArray = ensemble.posts;

        const index = postArray.findIndex((i:any) => {
            return i._id == postId;
        });

        postArray[index] = post;
        return await ensemble.save();
    }

    async removePost(id: string, postId: string): Promise<Ensemble> {
        const ensemble = await this.ensembleModel.findById(id);
        const postArray = ensemble.posts;

        const newPostArray = postArray.filter((i:any) => {
            return i._id != postId;
        });

        ensemble.posts = newPostArray;
        return await ensemble.save();
    }
}