export const Fish = (fish) => {
    return `
        <section class="fishList-card">
            <div><img  class="${fish.image.class} image--card" src="${fish.image.src}" alt="${fish.image.alt}" /></div>
            <div class="fish__name">${fish.givenName}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.harvestLocation}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `
}