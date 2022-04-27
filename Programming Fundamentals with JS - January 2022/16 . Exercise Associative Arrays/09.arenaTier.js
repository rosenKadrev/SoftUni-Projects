function arenaTier(arrWithSortData) {

    let objWithSortData = {};
    let objWithTotalPointsOfSkill = {};

    for (let element of arrWithSortData) {
        let currentData = element.split(' -> '); //[ 'Peter', 'Duck', '400' ]
        let gladiatorName = currentData[0]; //'Peter'
        let technique = currentData[1]; //'Duck'
        let skill = currentData[2]; //'400'
        if (gladiatorName === 'Ave Cesar') {
            break;
        }
        if (gladiatorName.includes(' vs ')) {
            let names = gladiatorName.split(' vs '); //[ 'Peter', 'Gladius' ],[ 'Gladius', 'Julius' ],[ 'Gladius', 'Maximilian' ]
            let duelNameOne = names[0]; // 'Peter','Gladius','Gladius'
            let duelNameTwo = names[1]; //'Gladius' ,'Julius','Maximilian' 
            if (objWithSortData.hasOwnProperty(duelNameOne) && objWithSortData.hasOwnProperty(duelNameTwo)) {
                let tuplesDuelNameOne = Object.entries(objWithSortData[duelNameOne]); //[ 'Duck', '400' ]
                let tuplesDuelNameTwo = Object.entries(objWithSortData[duelNameTwo]); //[ 'Heal', '200' ],[ 'Support', '250' ],[ 'Shield', '250' ]
                for (let [nameTechniqueOne, skillOne] of tuplesDuelNameOne) {
                    for (let [nameTechniqueTwo, skilTwo] of tuplesDuelNameTwo) {
                        if (nameTechniqueOne === nameTechniqueTwo) {
                            if (skillOne > skilTwo) {
                                delete objWithSortData[duelNameTwo];
                            } else if (skillOne < skilTwo) {
                                delete objWithSortData[duelNameOne];
                            }
                        }
                    }
                }
            }
            continue;
        }
        if (!objWithSortData.hasOwnProperty(gladiatorName)) {
            objWithSortData[gladiatorName] = {};
            objWithSortData[gladiatorName][technique] = skill;
        } else {
            if (!objWithSortData[gladiatorName].hasOwnProperty(technique)) {
                objWithSortData[gladiatorName][technique] = skill;
            } else {
                if (objWithSortData[gladiatorName][technique] < skill) {
                    objWithSortData[gladiatorName][technique] = skill;
                }
            }
        }
    }

    for (let key in objWithSortData) {
        objWithTotalPointsOfSkill[key] = 0
        for (let keyOne in objWithSortData[key]) {
            if (!objWithSortData[key].skill) {
                objWithTotalPointsOfSkill[key] += Number(objWithSortData[key][keyOne]);
            } else {
                objWithTotalPointsOfSkill[key] += Number(objWithSortData[key][keyOne]);
            }
        }
    }

    let elementsForSortingTotalPointsOfSkill = Object.entries(objWithTotalPointsOfSkill);
    elementsForSortingTotalPointsOfSkill.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let elementsForSortingData = Object.entries(objWithSortData);

    for (let elements of elementsForSortingTotalPointsOfSkill) {
        console.log(`${elements[0]}: ${elements[1]} skill`);
        for (let elementsInOne of elementsForSortingData) {
            let name = elementsInOne[0];
            let sortTechnique = Object.entries(elementsInOne[1]);
            if (elements[0] === name) {
                sortTechnique.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
                for (let elementsInTwo of sortTechnique) {
                    console.log(`- ${elementsInTwo[0]} <!> ${elementsInTwo[1]}`);
                }
            }
        }
    }
}
// arenaTier([
//         'Peter -> BattleCry -> 400',
//         'Alex -> PowerPunch -> 300',
//         'Stefan -> Duck -> 200',
//         'Stefan -> Tiger -> 250',
//         'Ave Cesar'
//     ])
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])