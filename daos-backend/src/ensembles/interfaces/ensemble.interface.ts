// Creating an interface (Ensemble)
export interface Ensemble {
    // ? = Optional
    id?: string;
    name?: String,
    description?: String,
    website?: String,
    zipCode?: String,
    city?: String,
    activeMusicians?: String,
    practiceFrequency?: String,
    continuously?: Boolean,
    projectBased?: Boolean,
    genre?: [],
    admin?: String
}

// Creating a child interface of the Ensemble interface (AddEnsemble)
export interface AddEnsemble extends Ensemble {
    name: String,
    description: String,
    website: String,
    zipCode: String,
    city: String,
    activeMusicians: String,
    practiceFrequency: String,
    continuously: Boolean,
    projectBased: Boolean,
    genre: [],
    admin: String,
}

// Creating a child interface of the Ensemble interface (EditEnsemble)
export interface EditEnsemble extends Ensemble {
    name: String,
    description: String,
    website: String,
    zipCode: String,
    city: String,
    activeMusicians: String,
    practiceFrequency: String,
    continuously: Boolean,
    projectBased: Boolean,
    genre: [],
}