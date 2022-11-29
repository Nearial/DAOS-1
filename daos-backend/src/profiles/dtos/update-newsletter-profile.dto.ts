import { IsBoolean } from "class-validator";

// Creating a DTO (UpdatePasswordProfileDTO), that implements a child interface (UpdatePasswordProfile)
export class UpdateNewsletterProfileDTO {
    
    @IsBoolean()
    readonly newsletter: boolean;

    constructor(newsletter: boolean) {
        this.newsletter = newsletter;
    }
}