import { IsBoolean } from "class-validator";
import { UpdateNewsletterProfile } from "../interfaces/profile.interface";

// Creating a DTO (UpdatePasswordProfileDTO), that implements a child interface (UpdatePasswordProfile)
export class UpdateNewsletterProfileDTO implements UpdateNewsletterProfile {
    
    @IsBoolean()
    readonly newsletter: boolean;
}