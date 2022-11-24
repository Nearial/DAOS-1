// Creating an interface (Instrument)
export interface Instrument {
    // ? = Optional
    id?: string;
    instrumentName?: string;
    skillLevel?: string;
    genre?: [String];
}

// Creating a child interface of the Profile interface (AddEditRemoveInstrument)
export interface AddEditRemoveInstrument extends Instrument {
    instrumentName: string;
    skillLevel: string;
    genre: [String];
}