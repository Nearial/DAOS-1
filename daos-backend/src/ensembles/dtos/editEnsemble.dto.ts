import { IsAlpha, IsArray, IsBoolean, IsNotEmpty, IsNumberString, MaxLength } from "class-validator";
import { EditEnsemble } from "../interfaces/ensemble.interface";

// Creating a DTO (EnsembleDTO), that implements a child interface (AddEditRemoveEnsemble)
export class EditEnsembleDTO implements EditEnsemble {
    
    @IsNotEmpty()
    readonly name: String;
    
    @MaxLength(250)
    readonly description: String;
    
    readonly website: String;

    @IsNumberString()
    readonly zipCode: String;

    @IsAlpha()
    readonly city: String;

    readonly activeMusicians: String;

    readonly practiceFrequency: String;

    @IsBoolean()
    readonly continuously: Boolean;

    @IsBoolean()
    readonly projectBased: Boolean;

    @IsArray()
    readonly genre: [];
}
