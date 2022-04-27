function melrahShake(arr) {

    let textForShake = arr[0];
    let pattern = arr[1];

    while (pattern.length > 0) {
        let startIndex = textForShake.indexOf(pattern);
        let lastIndex = textForShake.lastIndexOf(pattern);

        if (startIndex !== lastIndex && (startIndex !== -1 && lastIndex !== -1)) {
            textForShake = textForShake.replace(pattern, '');

            let newLastIndex = textForShake.lastIndexOf(pattern);
            let spliceTextForShake = textForShake.split('');
            spliceTextForShake.splice(newLastIndex, (Number(pattern.length)));
            textForShake = spliceTextForShake.join('');

            let indexForCutPattern = Math.floor(Number(pattern.length) / 2);
            pattern = pattern.replace(pattern[indexForCutPattern], '');
            console.log('Shaked it.');
        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(textForShake);
}
// melrahShake(['astalavista babysta',
//     'sta'
// ])
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm'
])
melrahShake(['stastasasssastasta', 'sta'])