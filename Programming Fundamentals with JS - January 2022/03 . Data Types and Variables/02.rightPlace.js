// function rightPlace(string, char, result) {

//     let res = string.replace('_', char);

//     if (res === result) {
//         console.log('Matched');
//     } else {
//         console.log('Not Matched');
//     }

// }
// rightPlace('Str_ng', 'I', 'Strong')
// rightPlace('Str_ng', 'i', 'String')



function rightPlacee(string, char, result) {

    let res = string.replace('_', char);

    let compare = res === result ? 'Matched' : 'Not Matched';
    console.log(compare);

}
rightPlacee('Str_ng', 'I', 'Strong')
rightPlacee('Str_ng', 'i', 'String')