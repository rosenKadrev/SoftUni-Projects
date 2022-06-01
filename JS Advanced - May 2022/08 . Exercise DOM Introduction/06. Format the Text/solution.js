function solve() {

    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    let arrInputWithSentences = input.split('.').filter(e => e.length > 0);
    while (arrInputWithSentences.length != 0) {
        let pArr = arrInputWithSentences.splice(0, 3);
        let finalP = '';
        for (let p of pArr) {
            finalP += p + '.'
        }
        let newP = document.createElement('p');
        newP.textContent = finalP;
        output.appendChild(newP);
    }
}