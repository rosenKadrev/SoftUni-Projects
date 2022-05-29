function carFactory(obj) {

    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let typeOfCar = [{ type: 'hatchback', color: obj.color }, { type: 'coupe', color: obj.color }];

    if (obj.wheelsize % 2 == 0) {
        obj.wheelsize -= 1;
    }

    let orderCar = {
        model: obj.model,
        engine: engines.filter((p) => p.power >= obj.power)[0],
        carriage: typeOfCar.filter((t) => t.type == obj.carriage)[0],
        wheels: [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]
    }
    return orderCar;

}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})