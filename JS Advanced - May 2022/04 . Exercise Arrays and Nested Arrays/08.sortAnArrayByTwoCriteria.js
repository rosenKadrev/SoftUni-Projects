function sortAnArrayByTwoCriteria(arrWithElements) {

    arrWithElements.sort(
        function(a, b) {
            if (a.length === b.length) {
                return a.localeCompare(b);
            }
            return a.length > b.length ? 1 : -1;
        });
    console.log(arrWithElements.join('\n'));

}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma'])
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default'])



function sortAnArrayByTwoCriteria(arrWithElements) {

    arrWithElements.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arrWithElements.join('\n'));

}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma'])
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default'])