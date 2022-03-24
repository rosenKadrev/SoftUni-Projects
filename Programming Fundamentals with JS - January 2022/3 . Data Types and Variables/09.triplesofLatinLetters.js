function triplesOfLatinLetters(n) {

    let triples = '';

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {

            for (let k = 1; k <= n; k++) {

                triples = String.fromCharCode(96 + i) + String.fromCharCode(96 + j) + String.fromCharCode(96 + k)
                console.log(triples);
            }
        }
    }
}
triplesOfLatinLetters('3')
triplesOfLatinLetters('2')