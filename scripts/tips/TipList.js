import { inputTips } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tipHeader")
    const tippies = inputTips();

    let tipHTMLRepresentations = ""
    for (const tipItem of tippies) {
        tipHTMLRepresentations += Tip(tipItem);
    }

    contentElement.innerHTML += `
        <section class="tipList">
            ${tipHTMLRepresentations}
        </section>
    `
}