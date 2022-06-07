function listProcessor(arr) {

    let resultArr = [];

    for (let currentData of arr) {
        let [func, string] = currentData.split(' ');
        if (func === 'add') {
            add(string);
        } else if (func === 'remove') {
            remove(string);
        } else if (func === 'print') {
            print(resultArr);
        }
    }

    function add(data) {
        resultArr.push(data);
    }

    function remove(data) {
        while (resultArr.includes(data)) {
            let index = resultArr.indexOf(data);
            resultArr.splice(index, 1);
        }
    }

    function print(arr) {
        console.log(arr.join(','));
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);