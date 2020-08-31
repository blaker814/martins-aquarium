import { inputTips } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tipHeader")
    const tippies = inputTips();

    contentElement.innerHTML += `
        <section class="tipList">
            ${tippies.map(tip => Tip(tip)).join("")}
        </section>
    `
}