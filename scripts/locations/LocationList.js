import { nameLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".locHeader")
    const places = nameLocation()

    // Generate all of the HTML for all of the fish
    let locHTMLRepresentations = ""
    for (const loc of places) {
        locHTMLRepresentations += Location(loc);
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <ul>
            ${locHTMLRepresentations}
        </ul>
    `
}