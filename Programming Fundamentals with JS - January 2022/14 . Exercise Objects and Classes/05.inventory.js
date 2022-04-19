function inventory(arr) {

    let arrWithHeroesInfo = [];

    for (let heroInfo of arr) {
        let heroArr = heroInfo.split('/');
        let newHero = {};
        newHero.name = heroArr[0].trim();
        newHero.level = heroArr[1].trim();
        newHero.items = heroArr[2].trim();
        arrWithHeroesInfo.push(newHero)
    }
    arrWithHeroesInfo.sort((a, b) => parseFloat(a.level) - parseFloat(b.level));

    for (let object of arrWithHeroesInfo) {
        console.log(`Hero: ${object.name}` + '\n' +
            `level => ${object.level}` + '\n' +
            `items => ${object.items}`
        );
    }
}
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])
inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara'])