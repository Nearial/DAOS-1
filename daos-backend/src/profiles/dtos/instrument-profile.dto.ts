import { IsAlpha, IsArray, IsNumberString } from "class-validator";
import { AddEditRemoveInstrument } from "../interfaces/instrument.interface";

// Creating a DTO (InstrumentDTO), that implements a child interface (AddEditRemoveInstrument)
export class InstrumentDTO implements AddEditRemoveInstrument {
    
    @IsAlpha()
    readonly instrumentName: string;

    @IsNumberString()
    readonly skillLevel: string;

    @IsArray()
    readonly genre: [String];
}