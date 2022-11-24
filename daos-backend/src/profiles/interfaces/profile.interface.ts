import { Instrument } from "./instrument.interface";

// Creating an interface (Profile)
export interface Profile {
    // ? = Optional
    id?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    zipCode?: string;
    city?: string;
    userName?: string;
    phone?: string;
    status?: boolean;
    newsletter?: boolean;
    password?: string;
    instruments?: Instrument[];
}

// Creating a child interface of the Profile interface (CreateProfile)
export interface CreateProfile extends Profile {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    newsletter?: boolean;
}

// Creating a child interface of the Profile interface (UpdateProfile)
export interface UpdateProfile extends Profile {
    firstName: string;
    lastName: string;
    description?: string;
    zipCode?: string;
    city?: string;
    userName: string;
    phone?: string;
    status?: boolean;
}

// Creating a child interface of the Profile interface (UpdatePasswordProfile)
export interface UpdatePasswordProfile extends Profile {
    password: string;
}

// Creating a child interface of the Profile interface (UpdatePasswordProfile)
export interface UpdateNewsletterProfile extends Profile {
    newsletter?: boolean;
}