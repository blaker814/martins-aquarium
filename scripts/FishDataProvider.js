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
    }
]

export const useFish = () => {
    return fishCollection.slice()
}