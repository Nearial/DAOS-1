import { IsAlpha, IsBoolean, IsEmail, IsNumberString, MaxLength} from "class-validator";
import { UpdateProfile } from "../interfaces/profile.interface";

// Creating a DTO (UpdateProfileDTO), that implements a child interface (UpdateProfile)
export class UpdateProfileDTO implements UpdateProfile {

    @IsAlpha()
    readonly firstName: string;
    
    @IsAlpha()
    readonly lastName: string;

    @MaxLength(250)
    readonly description: string;
    
    @IsNumberString()
    readonly zipCode: string;
    
    @IsAlpha()
    readonly city: string;

    @IsEmail()
    readonly userName: string;

    @IsNumberString()
    readonly phone: string;
    
    @IsBoolean()
    readonly status: boolean;
}