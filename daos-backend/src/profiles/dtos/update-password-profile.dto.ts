import { IsAlphanumeric, MinLength } from "class-validator";

// Creating a DTO (UpdatePasswordProfileDTO), that implements a child interface (UpdatePasswordProfile)
export class UpdatePasswordProfileDTO {
    
    @MinLength(8)
    @IsAlphanumeric()
    readonly password: string;

    constructor(password: string) {
        this.password = password;
    }
}