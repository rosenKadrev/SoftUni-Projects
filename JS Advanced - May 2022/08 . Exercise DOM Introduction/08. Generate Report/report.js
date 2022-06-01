function generateReport() {

    let check = document.querySelectorAll('thead tr th input');
    let storeArrJson = [];
    let inexes = {};
    let count = 0;

    for (let iterator of check) {
        if (iterator.checked) {
            inexes[iterator.name] = count; // {status: 2, dateHired: 3}
        }
        count++;
    }
    let rows = [...document.querySelectorAll('tbody tr')];
    for (let row of rows) {
        let objForStoreJson = {};
        for (let key in inexes) {
            let value = inexes[key];
            objForStoreJson[key] = row.children[value].textContent;
        }
        storeArrJson.push(objForStoreJson);
    }
    document.getElementById('output').value = JSON.stringify(storeArrJson);

}