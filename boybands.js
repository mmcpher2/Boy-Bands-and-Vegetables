


let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


const bandElement = document.getElementById("boy-bands");
const veggieElement = document.getElementById("vegetables");


for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {

    const currentBand = bands[loopTracker]
    bandElement.innerHTML +=
    `<h2>${currentBand}</h2>`

    const currentVeggie = vegetables[loopTracker]
    veggieElement.innerHTML +=
    `<h2>${currentVeggie}</h2>`
}
