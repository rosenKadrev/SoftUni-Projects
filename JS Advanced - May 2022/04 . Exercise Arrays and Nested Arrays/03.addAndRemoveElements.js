function addAndRemoveElements(arrWithElements) {

    let arrWithNums = [];
    let num = 0;
    for (let i = 0; i < arrWithElements.length; i++) {
        num++;
        const currentCommand = arrWithElements[i];
        if (currentCommand === 'add') {
            arrWithNums.push(num);
        } else if (currentCommand === 'remove') {
            arrWithNums.pop();
        }
    }

    if (arrWithNums.length > 0) {
        console.log(arrWithNums.join('\n'));
    } else if (arrWithNums.length == 0) {
        console.log(`Empty`);
    }

}
addAndRemoveElements(['add', 'add', 'add', 'add'])
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
addAndRemoveElements(['remove', 'remove', 'remove'])