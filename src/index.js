const cardsDivElement = document.querySelector(".cards");

appendToElement = (element, parentElement) => parentElement.append(element);

function createElement(element = "", className = "", innerText = "") {
    const tempEl = document.createElement(element);
    tempEl.classList.add(className);
    tempEl.innerText = String(innerText);
    return tempEl;
}

data.forEach(pokemon => {

    const listItem = createElement("li", "card");
    appendToElement(listItem, cardsDivElement);

    const header = createElement("h2", "card--title", pokemon.name);
    appendToElement(header, listItem);

    const image = createElement("img", "card--img")
    image.setAttribute("src", pokemon.sprites.other['official-artwork'].front_default)
    image.setAttribute("height", 256)
    appendToElement(image, listItem);

    const statList = createElement("ul", "card--text");
    appendToElement(statList, listItem);

    pokemon.stats.forEach(element => {
        var tempStatStr = element.stat.name + ": " + element.base_stat 
        const tempStat = createElement("li", null, tempStatStr)
        appendToElement(tempStat, statList)
    });

    const appearedHeader = createElement("h3", "card--title", "Apprears in:");
    appendToElement(appearedHeader, listItem);

    const appearedList = createElement("ul", "card--text");
    appendToElement(appearedList, listItem);

    pokemon.game_indices.forEach(element => {
        const tempAppear = createElement("li", null, element.version.name)
        appendToElement(tempAppear, appearedList)
    });

});