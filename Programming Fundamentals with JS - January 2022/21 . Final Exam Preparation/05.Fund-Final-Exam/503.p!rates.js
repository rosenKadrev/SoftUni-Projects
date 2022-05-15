function pirates(arr) {

    let objWithTargetCities = {};

    for (let info of arr) {
        let currentInfo = info.split('||');
        let cityName = currentInfo[0];
        let cityPopulation = Number(currentInfo[1]);
        let cityGold = Number(currentInfo[2]);

        if (cityName === 'Sail') {
            break;
        }
        if (!objWithTargetCities.hasOwnProperty(cityName)) {
            objWithTargetCities[cityName] = { population: cityPopulation, gold: cityGold };
        } else {
            objWithTargetCities[cityName]['population'] += cityPopulation;
            objWithTargetCities[cityName]['gold'] += cityGold;
        }
    }
    let index = arr.indexOf('Sail');
    for (let i = index + 1; i < arr.length; i++) {
        let currentCommand = arr[i].split('=>');
        let currentCommandName = currentCommand[0];

        if (currentCommandName === 'End') {
            break;
        }
        if (currentCommandName === 'Plunder') {
            let townName = currentCommand[1];
            let townPeople = Number(currentCommand[2]);
            let townGold = Number(currentCommand[3]);

            console.log(`${townName} plundered! ${townGold} gold stolen, ${townPeople} citizens killed.`);
            objWithTargetCities[townName]['population'] -= townPeople;
            objWithTargetCities[townName]['gold'] -= townGold;
            if (objWithTargetCities[townName]['population'] <= 0 || objWithTargetCities[townName]['gold'] <= 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete objWithTargetCities[townName];
            }
        } else if (currentCommandName === 'Prosper') {
            let townNameForProsper = currentCommand[1];
            let townGoldForProsper = Number(currentCommand[2]);

            if (townGoldForProsper < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                objWithTargetCities[townNameForProsper]['gold'] += townGoldForProsper;
                console.log(`${townGoldForProsper} gold added to the city treasury. ${townNameForProsper} now has ${objWithTargetCities[townNameForProsper]['gold']} gold.`);
            }
        }
    }

    let arrForFinalPrint = Object.entries(objWithTargetCities);
    if (arrForFinalPrint.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${arrForFinalPrint.length} wealthy settlements to go to:`);
        for (let iterator of arrForFinalPrint) {
            console.log(`${iterator[0]} -> Population: ${iterator[1].population} citizens, Gold: ${iterator[1].gold} kg`);
        }
    }
}
// pirates([
//         "Tortuga||345000||1250",
//         "Santo Domingo||240000||630",
//         "Havana||410000||1100",
//         "Sail",
//         "Plunder=>Tortuga=>75000=>380",
//         "Prosper=>Santo Domingo=>180",
//         "End"
//     ])
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
])