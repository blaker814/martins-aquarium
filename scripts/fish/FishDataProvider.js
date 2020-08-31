const fishCollection = [
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Bart",
        species: "Sonifis",
        size: 56,
        diet: "crustaceans",
        harvestLocation: "Springfield"
    },
    {
        image: {
            class: "fish__image",
            src: "images/orange-fish.jpeg",
            alt: "Beautiful Orange Fish"
        },
        givenName: "Homer",
        species: "Popifis",
        size: 60,
        diet: "beer",
        harvestLocation: "Springfield"
    },
    {
        image: {
            class: "fish__image",
            src: "images/pink-fish.jpeg",
            alt: "Beautiful Pink Fish"
        },
        givenName: "Marge",
        species: "Momifis",
        size: 73,
        diet: "crustaceans",
        harvestLocation: "Springfield"
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Lisa",
        species: "Daughtifis",
        size: 54,
        diet: "crustaceans",
        harvestLocation: "Springfield"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-blue-fish.jpeg",
            alt: "Beautiful Yellow-Blue Fish"
        },
        givenName: "Maggie",
        species: "Babifis",
        size: 18,
        diet: "crustaceans",
        harvestLocation: "Springfield"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-white-fish.jpeg",
            alt: "Beautiful Yellow-White Fish"
        },
        givenName: "Lucky Number Seven",
        species: "Dogifis",
        size: 45,
        diet: "crustaceans",
        harvestLocation: "Springfield"
    },
    {
        image: {
            class: "fish__image",
            src: "images/silver-fish.jpg",
            alt: "Beautiful Silver Fish"
        },
        givenName: "Moe",
        species: "Friendifis",
        size: 70,
        diet: "crustaceans",
        harvestLocation: "Springfield"
    },
    {
		image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Steve",
		size: 5,
		diet: "crustaceans",
		species: "Clownfish",
		harvestLocation: "Petco"
	},
	{
		image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Big Mac",
		size: 72,
		diet: "jellyfish",
		species: "Giant sunfish",
		harvestLocation: "Sam's Club Reef"
	},
	{
		image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Squigle",
		size: 24,
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck"
	},
	{
		image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Hammy",
		size: 48,
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot"
	},
	{
		image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Tiny",
		size: 1,
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Gem Tang",
        givenName: "Diamond",
        size: .5,
        diet: "Algae Strips",
        harvestLocation: "South Africa"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Black Tang",
        givenName: "Midnight",
        size: 1,
        diet: "Vegetation",
        harvestLocation: "Croatia"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Crosshatch Triggerfish",
        givenName: "Itchy",
        size: 84,
        diet: "Micronutrients",
        harvestLocation: "Blue Hole"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Candy Basslet",
        givenName: "Cherry",
        size: .3,
        diet: "Algae",
        harvestLocation: "Brazil"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Japanese Interruptus Angelfish",
        givenName: "Rainbow",
        size: 24,
        diet: "Fish pellets",
        harvestLocation: "South Africa"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Clarion Angelfish",
        givenName: "Banana Stripe",
        size: 1,
        diet: "Micronutrients",
        harvestLocation: "Antiqua"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Wrought Iron Butterfly",
        givenName: "Zebra",
        size: 10,
        diet: "Crustaceans",
        harvestLocation: "Croatia"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Neptune Grouper",
        givenName: "Squigy",
        size: 12,
        diet: "Algae",
        harvestLocation: "Bahamas"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Nemo",
        species: "Clownfish",
        size: 1.5,
        diet: "Copepods",
        harvestLocation: "Orlando, FL"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Torch",
        species: "Flame Angelfish",
        size: 3,
        diet: "Mealworms",
        harvestLocation: "San Jose, CA"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Rocky",
        species: "Blue Damselfish",
        size: 2,
        diet: "Copepods",
        harvestLocation: "Destin, FL"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Rudy",
        species: "Copperband Butterflyfish",
        size: 5,
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Simba",
        species: "Lionfish",
        size: 6,
        diet: "Mealworms",
        harvestLocation: "Argentina"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Mr. Freeze",
        species: "Blue Tang",
        size: 6,
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Frodo",
        species: "Yellow Tang",
        size: 4,
        diet: "Mealworms",
        harvestLocation: "Honolulu, HI"
    },
    {
        species: "Goldfish",
        size: 4,
        diet: "Fish Food",
        givenName: "Lockes",
        harvestLocation: "Wally World",
        image: {
            class: "fish__image",
            src: "images/orange-fish.jpeg",
            alt: "Beautiful Orange Fish"
        }
    },
    {
        species: "Rainbow Trout",
        size: 4,
        diet: "Fish Food",
        givenName: "Treant",
        harvestLocation: "Lake Canada",
        image: {
            class: "fish__image",
            src: "images/orange-fish.jpeg",
            alt: "Beautiful Orange Fish"
        }
    },
    {
        species: "Bluegill",
        size: 4,
        diet: "Fish Food",
        givenName: "Big Blue",
        harvestLocation: "Friend's Place",
        image: {
            class: "fish__image",
            src: "images/orange-fish.jpeg",
            alt: "Beautiful Orange Fish"
        }
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Bart",
        species: "Bartfish",
        size: 4,
        harvestLocation: "Springfield",
        diet: "butterfinger"
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Sam",
        species: "Colin's Angelfish",
        size: 7.62,
        harvestLocation: "Philippines",
        diet: "Spirulina, marine algae, mysis or frozen shrimp"
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Gandolf",
        species: "Gem Tang",
        size: 22.86,
        harvestLocation: "Madagascar",
        diet: "marine-based seaweed and algae"
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Frodo",
        species: "Wrought Iron Butterflyfish",
        size: 15.24,
        harvestLocation: "Southern Japan",
        diet: "Microalgea, Zooplankton, Small crustaceans"
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Pippen",
        species: "Peppermint Angelfish",
        size: 7,
        harvestLocation: "Rarotonga",
        diet: "copepods and amphipods"
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Gollum",
        species: "Yellow Multi-Banded Pipefish",
        size: 16.5,
        harvestLocation: "Indonesia",
        diet: "live copepods, vitamin-enriched live baby brine shrimp"
    },
    {
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        givenName: "Smaug",
        species: "Dactylopus dactylopus",
        size: 30,
        harvestLocation: "Guam",
        diet: "Zooplankton, small crustaceans, shrimp"
    },
    {
        givenName: "Big Blue",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Male Beta",
        size: 2,
        diet: "Flies",
        harvestLocation: "Beaches of Walmart",
    },
    {
        givenName: "Blorpy",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Blob Fish",
        size: 24,
        diet: "Sea Urchins",
        harvestLocation: "Deep Darkness",
    },
    {
        givenName: "Life of the Party (nickname Part)",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Crazinus Fishifus",
        size: 5,
        diet: "algae",
        harvestLocation: "Beaches of Walmart",
    },
    {
        givenName: "Buford",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Male Dopey Fish",
        size: 22,
        diet: "Diet Fish Kibble",
        harvestLocation: "Gerrys Air Balloon and Fish Emporium",
    },
    {
        givenName: "Fish Eater",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Who knows?",
        size: 1,
        diet: "Other fish",
        harvestLocation: "Lake",
    },
    {
        givenName: "Marlin",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Male Clown Fish",
        size: 2,
        diet: "Tears",
        harvestLocation: "P. Sherman, 42 Wallaby Way, Sydney",
    },
    {
        givenName: "Dory",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Royal Blue Tang",
        size: 1.2,
        diet: "crustaceans",
        harvestLocation: "Pizza Planet"
    },
    {
        givenName: "Archy",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Arc-Eye Hawkfish",
        size: 2,
        diet: "shrimp and other small fishes",
        harvestLocation: "Seaward reefs in the pacific ocean"
    },
    {
        givenName: "Pear",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Bartletts' Anthias",
        size: .9,
        diet: "zooplankton",
        harvestLocation: "Coral reef in the western Pacific ocean"
    },
    {
        givenName: "Axel Rose",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Axilspot Wrasse",
        size: 2,
        diet: "mollusks",
        harvestLocation: "A clear lagoon"
    },
    {
        givenName: "Angle",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Bicolor Angelfish",
        size: 15,
        diet: "coral polyps",
        harvestLocation: "Coral and rubble areas"
    },
    {
        givenName: "Patricia",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Bignose Unicornfish",
        size: 55,
        diet: "zooplankton",
        harvestLocation: "Deep lagoon"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-white-fish.jpeg",
            alt: "Beautiful Yellow-White Fish"
        },
        givenName: "Guppi Goldenberg",
        species: "Pleebon Flounder",
        size: 2,
        diet: "Turtle Turds",
        harvestLocation: "Over Yonder"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-white-fish.jpeg",
            alt: "Beautiful Yellow-White Fish"
        },
        givenName: "Sushi",
        species: "Male Beta",
        size: 2,
        diet: "Flies",
        harvestLocation: "Beaches of Walmart"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-white-fish.jpeg",
            alt: "Beautiful Yellow-White Fish"
        },
        givenName: "Nemo",
        species: "Clown Fish",
        size: 3,
        diet: "Kelp",
        harvestLocation: "42 Wallaby Way, Sydney"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-white-fish.jpeg",
            alt: "Beautiful Yellow-White Fish"
        },
        givenName: "James Pond",
        species: "Party Fish",
        size: 69,
        diet: "Peanut Butter",
        harvestLocation: "Down Under"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-white-fish.jpeg",
            alt: "Beautiful Yellow-White Fish"
        },
        givenName: "Ann Chovy",
        species: "Dancing Queen",
        size: 108,
        diet: "McChickens",
        harvestLocation: "Sandy Castles Resort"
    },
    {
        image: {
            class: "fish__image",
            src: "images/yellow-white-fish.jpeg",
            alt: "Beautiful Yellow-White Fish"
        },
        givenName: "Phish Styx",
        species: "Gillfunkle",
        size: 9,
        diet: "school fish",
        harvestLocation: "Navy Pier"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    const holyFishes = [];
    for (const fish of fishCollection) {
        if (fish.size % 3 === 0) {
            holyFishes.push(fish);
        }
    }  
    return holyFishes;  
}

export const mostSoldierFish = () => {
    const soldierFishes = [];
    for (const fish of fishCollection) {
        if (fish.size % 3 !== 0 && fish.size % 5 === 0) {
            soldierFishes.push(fish);
        }
    }  
    return soldierFishes;
}

export const mostUnworthyFish = () => {
    const unworthyFishes = [];
    for (const fish of fishCollection) {
        if (fish.size % 3 !== 0 && fish.size % 5 !== 0) {
            unworthyFishes.push(fish);
        }
    }    
    return unworthyFishes;
}