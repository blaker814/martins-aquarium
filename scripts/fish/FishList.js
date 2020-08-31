import { mostHolyFish, mostSoldierFish, mostUnworthyFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".fishList")
    const holyFish = mostHolyFish();
    const soldierFish = mostSoldierFish();
    const unworthyFish = mostUnworthyFish();

    // Generate all of the HTML for all of the fish
    contentElement.innerHTML += `
            <h3 class="fishHeader">Holy Fish</h3>
            ${holyFish.map(fish => Fish(fish)).join("")}
    `

    contentElement.innerHTML += `
            <h3 class="fishHeader">Soldier Fish</h3>
            ${soldierFish.map(fish => Fish(fish)).join("")}
    `

    contentElement.innerHTML += `
            <h3 class="fishHeader">Unworthy Fish</h3>
            ${unworthyFish.map(fish => Fish(fish)).join("")}
    `
}