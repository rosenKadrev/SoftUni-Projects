function travelTime(arrWithData) {

    let objWithSortData = {};

    for (let input of arrWithData) {
        let currentData = input.split(' > '); //['Bulgaria', 'Sofia', '500']
        let countryName = currentData[0];
        let townName = currentData[1];
        let travelCost = Number(currentData[2]);
        if (!objWithSortData.hasOwnProperty(countryName)) {
            objWithSortData[countryName] = {};
            objWithSortData[countryName][townName] = travelCost;
        } else {
            if (!objWithSortData[countryName].hasOwnProperty(townName)) {
                objWithSortData[countryName][townName] = travelCost;
            } else {
                if (objWithSortData[countryName][townName] >= travelCost) {
                    objWithSortData[countryName][townName] = travelCost;
                }
            }
        }
    }
    let elementsForSortingArr = Object.entries(objWithSortData);
    elementsForSortingArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let iterator of elementsForSortingArr) {
        let currentCountry = iterator[0];
        let currentTownsAndCosts = iterator[1];
        let townsCostForSortingArr = Object.entries(currentTownsAndCosts);
        townsCostForSortingArr.sort((a, b) => a[1] - b[1]);
        let allInfo = `${currentCountry} ->`;
        for (let [townName, cost] of townsCostForSortingArr) {
            allInfo += ` ${townName} -> ${cost}`;
        }
        console.log(allInfo);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])