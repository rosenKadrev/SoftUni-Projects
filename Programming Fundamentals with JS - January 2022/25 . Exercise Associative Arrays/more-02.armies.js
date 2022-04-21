function armies(arrWithData) {

    let objWithLeadersArmyNameAndPoints = {};

    for (let iteratorA of arrWithData) {
        if (iteratorA.includes('arrives')) {
            let currentLeaderName = iteratorA.split(' arrives')[0]; //Rick Burr
            objWithLeadersArmyNameAndPoints[currentLeaderName] = {};
        } else if (iteratorA.includes(':')) {
            let currentName = iteratorA.split(': ')[0]; //Fergus
            let currentData = iteratorA.split(': ')[1];
            let armyName = currentData.split(', ')[0]; //Wexamp
            let armyCount = Number(currentData.split(', ')[1]); //30245
            if (objWithLeadersArmyNameAndPoints.hasOwnProperty(currentName)) {
                objWithLeadersArmyNameAndPoints[currentName][armyName] = armyCount;
            }
        } else if (iteratorA.includes('+')) {
            let currentArmyNameAndCount = iteratorA.split(' + ');
            let name = currentArmyNameAndCount[0]; // Wexamp
            let count = Number(currentArmyNameAndCount[1]); // 6000
            for (let key in objWithLeadersArmyNameAndPoints) {
                if (objWithLeadersArmyNameAndPoints[key].hasOwnProperty(name)) {
                    objWithLeadersArmyNameAndPoints[key][name] += count;
                }
            }
        } else if (iteratorA.includes('defeated')) {
            let currentLeaderNameDefeated = iteratorA.split(' defeated')[0]; //Rick Burr
            if (objWithLeadersArmyNameAndPoints.hasOwnProperty(currentLeaderNameDefeated)) {
                delete objWithLeadersArmyNameAndPoints[currentLeaderNameDefeated];
            }
        }
    }

    let tuplesForSortOne = Object.entries(objWithLeadersArmyNameAndPoints); //[[ 'Findlay', { Britox: 39040 } ], [ 'Porter', { Legion: 55302, Retix: 3205 } ]]
    let objWithFinalPoints = {};

    for (let iteratorB of tuplesForSortOne) {
        let currentOne = iteratorB[1];
        let sortArr = Object.entries(currentOne);
        let allPoints = 0;
        for (let iteratorC of sortArr) {
            allPoints += Number(iteratorC[1])
        }
        objWithFinalPoints[iteratorB[0]] = allPoints;
        allPoints = 0;
    }

    let tuplesForSortTwo = Object.entries(objWithFinalPoints).sort((a, b) => b[1] - a[1]);
    for (let element of tuplesForSortTwo) {
        console.log(`${element[0]}: ${element[1]}`);
        for (let elementsInOne of tuplesForSortOne) {
            let name = elementsInOne[0];
            let sortArmyCount = Object.entries(elementsInOne[1]);
            if (element[0] === name) {
                sortArmyCount.sort((a, b) => b[1] - a[1]);
                for (let elementsInTwo of sortArmyCount) {
                    console.log(`>>> ${elementsInTwo[0]} - ${elementsInTwo[1]}`);
                }
            }
        }
    }
}
//     let keysForSort = Object.keys(objWithLeadersArmyNameAndPoints); // [ 'Findlay', 'Porter' ]
//     let sortedLeaders = keysForSort.sort((a, b) => getTotalArmyCount(objWithLeadersArmyNameAndPoints[b]) - getTotalArmyCount(objWithLeadersArmyNameAndPoints[a]));
//     console.log(sortedLeaders);
//     sortedLeaders.map(leader => {
//         console.log(`${leader}: ${getTotalArmyCount(objWithLeadersArmyNameAndPoints[leader])}`);
//         let sortedArmy = Object.entries(objWithLeadersArmyNameAndPoints[leader]).sort((a, b) => b[1] - a[1]);
//         sortedArmy.map(army => console.log(`>>> ${army[0]} - ${army[1]}`));
//     });

//     function getTotalArmyCount(leader) {
//         let totalArmyCount = 0;
//         Object.entries(leader).map(army => totalArmyCount += army[1]);
//         return totalArmyCount;
//     }
// }
armies([
        'Rick Burr arrives',
        'Fergus: Wexamp, 30245',
        'Rick Burr: Juard, 50000',
        'Findlay arrives',
        'Findlay: Britox, 34540',
        'Wexamp + 6000',
        'Juard + 1350',
        'Britox + 4500',
        'Porter arrives',
        'Porter: Legion, 55000',
        'Legion + 302',
        'Rick Burr defeated',
        'Porter: Retix, 3205'
    ])
    // armies([
    //     'Rick Burr arrives',
    //     'Findlay arrives',
    //     'Rick Burr: Juard, 1500',
    //     'Wexamp arrives',
    //     'Findlay: Wexamp, 34540',
    //     'Wexamp + 340',
    //     'Wexamp: Britox, 1155',
    //     'Wexamp: Juard, 43423'
    // ])