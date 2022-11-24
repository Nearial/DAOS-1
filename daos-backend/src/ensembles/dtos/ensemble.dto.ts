import { IsAlpha, IsArray, IsBoolean, IsNotEmpty, IsNumberString, IsString, MaxLength } from "class-validator";
import { AddEditRemoveEnsemble } from "../interfaces/ensemble.interface";

// Creating a DTO (EnsembleDTO), that implements a child interface (AddEditRemoveEnsemble)
export class EnsembleDTO implements AddEditRemoveEnsemble {
    
    @IsNotEmpty()
    readonly name: String;
    
    @MaxLength(250)
    readonly description: String;
    
    readonly website: String;

    @IsNumberString()
    readonly zipCode: Number;

    @IsAlpha()
    readonly city: String;

    readonly activeMusicians: String;

    readonly practiceFrequency: String;

    @IsBoolean()
    readonly continously: Boolean;

    @IsBoolean()
    readonly projectBased: Boolean;

    @IsArray()
    readonly genre: [];
    
    readonly admin: string;
}
