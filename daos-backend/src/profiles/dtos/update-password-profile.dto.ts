import { IsAlphanumeric, MinLength } from "class-validator";
import { UpdatePasswordProfile } from "../interfaces/profile.interface";

// Creating a DTO (UpdatePasswordProfileDTO), that implements a child interface (UpdatePasswordProfile)
export class UpdatePasswordProfileDTO implements UpdatePasswordProfile {
    
    @MinLength(8)
    @IsAlphanumeric()
    readonly password: string;
}