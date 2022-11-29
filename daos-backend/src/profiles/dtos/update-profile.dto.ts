import { IsAlpha, IsBoolean, IsEmail, IsNumberString, MaxLength} from "class-validator";

// Creating a DTO (UpdateProfileDTO), that implements a child interface (UpdateProfile)
export class UpdateProfileDTO {

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
    readonly email: string;

    @IsNumberString()
    readonly phone: string;
    
    @IsBoolean()
    readonly status: boolean;

    constructor(firstName: string, lastName: string, description: string, zipCode: string, city: string, email: string, phone: string, status: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.zipCode = zipCode;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.status = status;
    }
}