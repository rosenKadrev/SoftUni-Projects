function solve() {

    return {

        fighter(name) {
            let objForFighter = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    objForFighter.stamina--;
                    console.log(`${objForFighter.name} slashes at the foe!`);
                }
            }
            return objForFighter;
        },
        mage(name) {
            let objForMage = {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    objForMage.mana--;
                    console.log(`${objForMage.name} cast ${spell}`);
                }
            }
            return objForMage;
        }
    }

}
let create = solve();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);