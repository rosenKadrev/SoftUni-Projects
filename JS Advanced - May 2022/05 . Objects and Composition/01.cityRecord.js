function cityRecord(name, population, treasury) {

    const result = {};
    result.name = name;
    result['population'] = population;
    result.treasury = treasury;

    return result;
}

console.log(cityRecord('Tortuga', 7000, 15000))
console.log(cityRecord('Santo Domingo', 12000, 23500))



function cityRecord(name, population, treasury) {

    return {
        name,
        population,
        treasury
    };

}
console.log(cityRecord('Tortuga', 7000, 15000))
console.log(cityRecord('Santo Domingo', 12000, 23500))