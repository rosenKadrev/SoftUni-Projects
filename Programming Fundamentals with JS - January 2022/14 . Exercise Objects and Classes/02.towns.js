function towns(arrWithCitysInfo) {

    for (let information of arrWithCitysInfo) {
        let currentInfo = information.split(' | ');
        let city = {};
        city.town = currentInfo[0];
        city.latitude = Number(currentInfo[1]).toFixed(2);
        city.longitude = Number(currentInfo[2]).toFixed(2);
        console.log(city);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
towns(['Plovdiv | 136.45 | 812.575'])



function towns(arrWithCitysInfo) {

    for (let information of arrWithCitysInfo) {
        let currentInfo = information.split(' | ');
        let town = currentInfo[0];
        let latitude = Number(currentInfo[1]).toFixed(2);
        let longitude = Number(currentInfo[2]).toFixed(2);
        let city = { town, latitude, longitude };
        console.log(city);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
towns(['Plovdiv | 136.45 | 812.575'])