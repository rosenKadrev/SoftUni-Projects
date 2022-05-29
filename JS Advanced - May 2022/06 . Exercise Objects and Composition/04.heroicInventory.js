function heroticInventory(arrOfStrings) {

    let registerForHeroes = [];

    for (let iterator of arrOfStrings) {
        const currentDataForHeroes = iterator.split(' / ');
        const heroName = currentDataForHeroes[0];
        const heroLevel = Number(currentDataForHeroes[1]);
        let heroInventory = '';
        if (currentDataForHeroes.length == 2) {
            heroInventory = [];
        } else {
            heroInventory = currentDataForHeroes[2].split(', ');
        }

        let currentObjWithDataForHeroes = {};
        currentObjWithDataForHeroes.name = heroName;
        currentObjWithDataForHeroes.level = heroLevel;
        currentObjWithDataForHeroes.items = heroInventory;
        registerForHeroes.push(currentObjWithDataForHeroes);

    }
    console.log(JSON.stringify(registerForHeroes));

}
heroticInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
heroticInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
])
heroticInventory([
    'Jake / 1000'
])