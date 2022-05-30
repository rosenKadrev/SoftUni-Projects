function sumTable() {

    let tableTr = document.getElementsByTagName('tr');
    let total = 0;

    for (let i = 1; i < tableTr.length; i++) {
        let cols = tableTr[i].children;
        let currentLastColNum = Number(cols[cols.length - 1].textContent);
        total += currentLastColNum;
    }
    document.getElementById('sum').textContent = total;

}