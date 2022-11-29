import { IsAlpha, IsArray, IsBoolean, IsNotEmpty, IsNumberString, MaxLength } from "class-validator";

// Creating a DTO (EnsembleDTO), that implements a child interface (AddEditRemoveEnsemble)
export class AddEnsembleDTO {
    
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
    
    readonly admin: string;

    constructor(name: string, description: string, website: string, zipCode: string, city: string, activeMusicians: string, practiceFrequency: string, continuously: boolean, projectBased: boolean, genre: [], admin: string) {
        this.name = name;
        this.description = description;
        this.website = website;
        this.zipCode = zipCode;
        this.city = city;
        this.activeMusicians = activeMusicians;
        this.practiceFrequency = practiceFrequency;
        this.continuously = continuously;
        this.projectBased = projectBased;
        this.genre = genre;
        this.admin = admin;
    }
}
