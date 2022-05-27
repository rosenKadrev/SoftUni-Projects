function townPopulation(arr) {

    let objWithData = {};

    for (let i = 0; i < arr.length; i++) {
        const [town, population] = arr[i].split('<->');

        if (!objWithData.hasOwnProperty(town)) {
            objWithData[town] = Number(population);
        } else {
            objWithData[town] += Number(population);
        }
    }

    // for (const [key, value] of Object.entries(objWithData)) {
    //     console.log(`${key}: ${value}`);
    // }

    for (const key in objWithData) {
        console.log(`${key}: ${objWithData[key]}`);
    }
}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])