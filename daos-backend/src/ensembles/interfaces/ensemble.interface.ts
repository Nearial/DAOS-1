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
    admin?: any
}

// Creating a child interface of the Ensemble interface (AddEditRemoveEnsemble)
export interface AddEditRemoveEnsemble extends Ensemble {
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
