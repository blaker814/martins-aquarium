import { nameLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".locHeader")
    const places = nameLocation()

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <ul>
            ${places.map(place => Location(place)).join("")}
        </ul>
    `
}