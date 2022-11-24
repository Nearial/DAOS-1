import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { EnsembleDTO } from './dtos/ensemble.dto';
import { EnsemblesService } from './ensembles.service';
import { Ensemble } from './interfaces/ensemble.interface';

@Controller('ensembles')
export class EnsemblesController {
    // Dependency injection = imports data for use
    // Dependency injection - profiles service
    constructor(private readonly ensemblesService: EnsemblesService) {}

    // URL = /ensembles
    @Get()
    findAll(): Promise<Ensemble[]> {
        return this.ensemblesService.findAll().then((result) => {
            if(!(result.length === 0)) {
                return result;
            } else {
                throw new HttpException('Ensembles not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Post()
    create(@Body() createEnsemble: EnsembleDTO): Promise<Ensemble> {
        return this.ensemblesService.create(createEnsemble);
    }


    // URL = /ensembles/:id
    @Get(':id')
    findSpecific(@Param('id') id): Promise<Ensemble> {
        return this.ensemblesService.findSpecific(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }
}