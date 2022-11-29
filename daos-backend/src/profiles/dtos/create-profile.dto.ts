import { IsAlpha, IsAlphanumeric, IsBoolean, IsEmail, MinLength } from "class-validator";

// Creating a DTO (CreateProfileDTO), that implements a child interface (CreateProfile)
export class CreateProfileDTO {
    
    @IsAlpha()
    readonly firstName: string;
    
    @IsAlpha()
    readonly lastName: string;
    
    @IsEmail()
    readonly email: string;
    
    @MinLength(8)
    @IsAlphanumeric()
    readonly password: string;

    @IsBoolean()
    readonly newsletter: boolean;

    constructor(firstName: string, lastName: string, email: string, password: string, status: boolean, newsletter: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.newsletter = newsletter;
    }
}