import { IsAlpha, IsAlphanumeric, IsBoolean, IsEmail, MinLength } from "class-validator";
import { Instrument } from "../interfaces/instrument.interface";
import { CreateProfile } from "../interfaces/profile.interface";

// Creating a DTO (CreateProfileDTO), that implements a child interface (CreateProfile)
export class CreateProfileDTO implements CreateProfile {
    
    @IsAlpha()
    readonly firstName: string;
    
    @IsAlpha()
    readonly lastName: string;
    
    @IsEmail()
    readonly userName: string;
    
    @MinLength(8)
    @IsAlphanumeric()
    readonly password: string;

    @IsBoolean()
    readonly status: boolean;

    @IsBoolean()
    readonly newsletter: boolean;
}