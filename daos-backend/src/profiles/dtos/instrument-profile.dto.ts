import { IsAlpha, IsArray, IsNumberString } from "class-validator";

// Creating a DTO (InstrumentDTO), that implements a child interface (AddEditRemoveInstrument)
export class InstrumentDTO {
    
    @IsAlpha()
    readonly instrumentName: string;

    @IsNumberString()
    readonly skillLevel: string;

    @IsArray()
    readonly genre: [String];

    constructor(instrumentName: string, skillLevel: string, genre: [String]) {
        this.instrumentName = instrumentName;
        this.skillLevel = skillLevel;
        this.genre = genre;
    }
}