import { useFish, mostHolyFish, mostSoldierFish, mostUnworthyFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()
    const holyFish = mostHolyFish();
    const soldierFish = mostSoldierFish();
    const unworthyFish = mostUnworthyFish();

    // Generate all of the HTML for all of the fish
    let holyFishHTMLRepresentations = "";
    for (const fish of holyFish) {
        holyFishHTMLRepresentations += Fish(fish);
    }

    contentElement.innerHTML += `
            <h3 class="fishHeader">Holy Fish</h3>
            ${holyFishHTMLRepresentations}
    `

    let soldierFishHTMLRepresentations = "";
    for (const fish of soldierFish) {
        soldierFishHTMLRepresentations += Fish(fish);
    }

    contentElement.innerHTML += `
            <h3 class="fishHeader">Soldier Fish</h3>
            ${soldierFishHTMLRepresentations}
    `

    let unworthyFishHTMLRepresentations = "";
    for (const fish of unworthyFish) {
        unworthyFishHTMLRepresentations += Fish(fish);
    }

    contentElement.innerHTML += `
            <h3 class="fishHeader">Unworthy Fish</h3>
            ${unworthyFishHTMLRepresentations}
    `
    // Add a section, and all of the fish to the DOM
}