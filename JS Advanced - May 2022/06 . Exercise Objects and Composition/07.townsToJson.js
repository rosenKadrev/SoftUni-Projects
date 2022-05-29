function townsToJson(arrOfStrings) {

    arrOfStrings.shift();
    let arrForConvertToJson = [];
    for (const iterator of arrOfStrings) {
        let currentData = iterator
            .split('|')
            .map((a) => a.trim());
        currentData = currentData.filter((a) => a.length > 0);

        const town = currentData[0];
        const latitude = Number(Number(currentData[1]).toFixed(2));
        const longitude = Number(Number(currentData[2]).toFixed(2));
        arrForConvertToJson.push({ Town: town, Latitude: latitude, Longitude: longitude });
    }
    console.log(JSON.stringify(arrForConvertToJson));

}
townsToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])
console.log(`---------------------------`);
townsToJson([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])