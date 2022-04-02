// function addAndRemove(arr) {

//     let rowElements = '';

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         let num = (i + 1).toString();
//         if (element === 'add') {
//             rowElements += num + ' ';
//         } else if (element === 'remove') {
//             let kur = (i + 1).toString().length + 1;
//             rowElements = rowElements.slice(0, -kur);
//         }
//     }
//     if (rowElements.length === 0) {
//         rowElements = 'Empty';
//     }
//     console.log(rowElements);
// }
// addAndRemove(['add', 'add', 'add', 'add'])
// addAndRemove(['add', 'add', 'remove', 'add', 'add'])
// addAndRemove(['remove', 'remove', 'remove'])
// addAndRemove(['add', 'add', 'add', 'add', 'add', 'add', 'add', 'add', 'remove', 'remove', 'remove', 'remove'])



function addAndRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'remove') {
            result.pop();
        } else if (arr[i] === 'add') {
            result.push(i + 1);
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add', 'remove', 'add', 'add', 'remove', 'add', 'remove', 'remove'])
    // addAndRemove(['add', 'add', 'add', 'add'])
    // addAndRemove(['add', 'add', 'remove', 'add', 'add'])
    // addAndRemove(['remove', 'remove', 'remove'])