function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};


function solve(area, vol, input) {

    let arrForResult = [];
    let convertInput = JSON.parse(input);
    for (let currentInput of convertInput) {
        let currentArea = area.call(currentInput);
        let currentVol = vol.call(currentInput);
        arrForResult.push({ area: currentArea, volume: currentVol });
    }
    return arrForResult;

}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)