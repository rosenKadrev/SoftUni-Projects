function sequences(input) {
    input = input
        .map(JSON.parse)
        .map(el => el.sort((a, b) => b - a))
        .map(JSON.stringify);
    // console.log(input);
    console.log(new Set(input))
    console.log(...new Set(input));
    [...new Set(input)]
    .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(el => console.log(`[${el.join(', ')}]`));
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ])
    // sequences(["[7.14, 7.180, 7.339, 80.099]",
    //     "[7.339, 80.0990, 7.140000, 7.18]",
    //     "[7.339, 7.180, 7.14, 80.099]"
    // ])