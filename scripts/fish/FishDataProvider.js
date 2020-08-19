const fishCollection = [
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Bart",
        species: "Sonifis",
        size: "4 foot, 8 inches",
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
        size: "6 foot",
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
        size: "6 foot, 1 inch",
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
        size: "4 foot, 6 inches",
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
        size: "1 foot, 6 inches",
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
        size: "3 foot, 9 inches",
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
        size: "5 foot, 10 inches",
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
		size: "5 inches",
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
		size: "6 feet",
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
		size: "2 feet",
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
		size: "4 feet",
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
		size: "1 inch",
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
        size: "6 cm",
        diet: "Algae Strips",
        havestLocation: "South Africa"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Black Tang",
        givenName: "Midnight",
        size: "1 inch",
        diet: "Vegetation",
        havestLocation: "Croatia"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Crosshatch Triggerfish",
        givenName: "Itchy",
        size: "7 ft",
        diet: "Micronutrients",
        havestLocation: "Blue Hole"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Candy Basslet",
        givenName: "Cherry",
        size: "3 cm",
        diet: "Algae",
        havestLocation: "Brazil"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Japanese Interruptus Angelfish",
        givenName: "Rainbow",
        size: "2 ft",
        diet: "Fish pellets",
        havestLocation: "South Africa"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Clarion Angelfish",
        givenName: "Banana Stripe",
        size: "11 cm",
        diet: "Micronutrients",
        havestLocation: "Antiqua"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Wrought Iron Butterfly",
        givenName: "Zebra",
        size: "10 in",
        diet: "Crustaceans",
        havestLocation: "Croatia"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        species: "Neptune Grouper",
        givenName: "Squigy",
        size: "1 ft",
        diet: "Algae",
        havestLocation: "Bahamas"
    },
    {
        image: {
            class: "fish__image",
            src: "images/blue-fish.jpeg",
            alt: "Beautiful Blue Fish"
        },
        givenName: "Nemo",
        species: "Clownfish",
        size: "1.5 inches",
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
        size: "3 inches",
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
        size: "2 inches",
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
        size: "5 inches",
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
        size: "6 inches",
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
        size: "6 inches",
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
        size: "4 inches",
        diet: "Mealworms",
        harvestLocation: "Honolulu, HI"
    },
    {
        species: "Goldfish",
        size: "4 inches",
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
        size: "4 inches",
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
        size: "4 inches",
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
        size: "4 inches",
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
        size: "2 inches",
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
        size: "2 feet",
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
        size: "5 inches",
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
        size: "22 inches",
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
        size: "1 inch",
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
        size: "2 inches",
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
        size: "18 cm",
        diet: "crustaceans",
        harvestLocation: ""
    },
    {
        givenName: "Archy",
        image: {
            class: "fish__image",
            src: "images/rainbow-fish.jpeg",
            alt: "Beautiful Rainbow Fish"
        },
        species: "Arc-Eye Hawkfish",
        size: "20 cm",
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
        size: "9 cm",
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
        size: "20 cm",
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
        size: "15 cm",
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
        size: "55 cm",
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
        size: "2 inches",
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
        size: "2 inches",
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
        size: "3 inches minus one fin",
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
        size: "69cm",
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
        size: "9 feet",
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
        size: "3 big toes",
        diet: "school fish",
        harvestLocation: "Navy Pier"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}