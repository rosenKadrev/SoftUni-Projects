function cars(arr) {

    let objWithFunc = {
        create,
        createInherit,
        set,
        print
    }

    let objResult = {};
    for (let iterator of arr) {
        let currentData = iterator.split(' ');
        if (currentData[0] == 'create' && currentData[2] == undefined) {
            objWithFunc.create(currentData);
        } else if (currentData[0] == 'create' && currentData[2] == 'inherit') {
            objWithFunc.createInherit(currentData);
        } else if (currentData[0] == 'set') {
            objWithFunc.set(currentData);
        } else if (currentData[0] == 'print') {
            objWithFunc.print(currentData);
        }
    }

    function create(data) { // [ 'create', 'c1' ]
        let name = data[1];
        objResult[name] = {};
    }

    function createInherit(data) { // [ 'create', 'c2', 'inherit', 'c1' ] 
        let name = data[1];
        let inherit = data[3];
        objResult[name] = {};
    }

    function set(data) { // [ 'set', 'c1', 'color', 'red' ]   [ 'set', 'c2', 'model', 'new' ]
        let name = data[1];
        let key = data[2];
        let value = data[3];
        objResult[name][key] = value;
    }

    function print(data) { // [ 'print', 'c1' ]   [ 'print', 'c2' ]
        let entries = [];
        let name = data[1];
        for (let key in objResult[name]) {
            entries.push(`${key}:${objResult[name][key]}`);
        }
        console.log(entries.join(','));
    }
}
cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])



// function solve(input) {
//     const data = {};

//     const commandsMap = {
//         create: (name, inherits, parentName) => {
//             data[name] = inherits ? Object.create(data[parentName]) : {};
//             // console.log(data[name], inherits);
//         },
//         set: (name, k, v) => {
//             data[name][k] = v
//                 // console.log(data);
//         },
//         print: name => {
//             const entries = [];
//             for (const key in data[name]) {
//                 entries.push(`${key}:${data[name][key]}`);
//             }
//             console.log(entries.join(','));
//         },
//     }

//     input.forEach(x => {
//         const [command, name, k, v] = x.split(" ");
//         commandsMap[command](name, k, v);
//     })
//     console.log(data);
// }
// console.log(solve(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ]));