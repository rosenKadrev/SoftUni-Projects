function deserializeString(arr) {

    let objForDeserializeString = {};

    for (let iterator of arr) {
        if (iterator === 'end') {
            break;
        }
        let currentString = iterator.split(':')
        let letter = currentString[0];
        let indexes = currentString[1].split('/');
        for (let index of indexes) {
            objForDeserializeString[index] = letter;

        }
    }

    let finalString = '';
    for (let key in objForDeserializeString) {
        finalString += objForDeserializeString[key];
    }
    console.log(finalString);
}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end'
])
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
])