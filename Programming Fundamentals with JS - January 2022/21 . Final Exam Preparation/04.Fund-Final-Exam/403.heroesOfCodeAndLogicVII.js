function heroesOfCodeAndLogic(arr) {

    let heroesCount = Number(arr.shift());
    let objWithDataForHeroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let currentHeroInfo = arr[i].split(' ');
        let name = currentHeroInfo[0];
        let HP = Number(currentHeroInfo[1]);
        let MP = Number(currentHeroInfo[2]);

        objWithDataForHeroes[name] = { HP, MP }
    }

    for (let j = heroesCount; j < arr.length; j++) {
        let currentData = arr[j].split(' - ');
        let currentCommand = currentData[0];
        if (currentCommand === 'End') {
            break;
        }
        if (currentCommand === 'CastSpell') {
            let heroNameForCastSpell = currentData[1];
            let MPNeededForCastSpell = Number(currentData[2]);
            let spellName = currentData[3];
            if (MPNeededForCastSpell <= objWithDataForHeroes[heroNameForCastSpell]['MP']) {
                objWithDataForHeroes[heroNameForCastSpell]['MP'] -= MPNeededForCastSpell;
                console.log(`${heroNameForCastSpell} has successfully cast ${spellName} and now has ${objWithDataForHeroes[heroNameForCastSpell]['MP']} MP!`);
            } else {
                console.log(`${heroNameForCastSpell} does not have enough MP to cast ${spellName}!`);
            }
        } else if (currentCommand === 'TakeDamage') {
            let heroeNameForTakeDamage = currentData[1];
            let damage = Number(currentData[2]);
            let attackerName = currentData[3];
            objWithDataForHeroes[heroeNameForTakeDamage]['HP'] -= damage;
            if (0 < objWithDataForHeroes[heroeNameForTakeDamage]['HP']) {
                console.log(`${heroeNameForTakeDamage} was hit for ${damage} HP by ${attackerName} and now has ${objWithDataForHeroes[heroeNameForTakeDamage]['HP']} HP left!`);
            } else {
                console.log(`${heroeNameForTakeDamage} has been killed by ${attackerName}!`);
                delete objWithDataForHeroes[heroeNameForTakeDamage];
            }
        } else if (currentCommand === 'Recharge') {
            let heroNameForRecharge = currentData[1];
            let amountMP = Number(currentData[2]);
            let currentMP = objWithDataForHeroes[heroNameForRecharge]['MP'];
            objWithDataForHeroes[heroNameForRecharge]['MP'] += amountMP;
            if (objWithDataForHeroes[heroNameForRecharge]['MP'] > 200) {
                objWithDataForHeroes[heroNameForRecharge]['MP'] = 200;
                amountMP = objWithDataForHeroes[heroNameForRecharge]['MP'] - currentMP;
            }
            //let minMP = Math.min((200-objWithDataForHeroes[heroNameForRecharge].MP), amountMP);
            // objWithDataForHeroes[heroNameForRecharge]['MP'] += amountMP;
            console.log(`${heroNameForRecharge} recharged for ${amountMP} MP!`);
        } else if (currentCommand === 'Heal') {
            let heroNameForHeal = currentData[1];
            let amountHP = Number(currentData[2]);
            let currentHP = objWithDataForHeroes[heroNameForHeal]['HP'];
            objWithDataForHeroes[heroNameForHeal]['HP'] += amountHP;
            if (objWithDataForHeroes[heroNameForHeal]['HP'] > 100) {
                objWithDataForHeroes[heroNameForHeal]['HP'] = 100;
                amountHP = objWithDataForHeroes[heroNameForHeal]['HP'] - currentHP;
            }
            //let minHP = Math.min((200-objWithDataForHeroes[heroNameForHeal].HP), amountHP);
            // objWithDataForHeroes[heroNameForHeal]['HP'] += amountHP;
            console.log(`${heroNameForHeal} healed for ${amountHP} HP!`);
        }
    }

    let heroesForPrint = Object.entries(objWithDataForHeroes);
    for (let iterator of heroesForPrint) {
        console.log(`${iterator[0]}` + '\n' +
            `  HP: ${iterator[1]['HP']}` + '\n' +
            `  MP: ${iterator[1]['MP']}`);
    }
}
heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'

])
console.log(`-------------------------`);
heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])