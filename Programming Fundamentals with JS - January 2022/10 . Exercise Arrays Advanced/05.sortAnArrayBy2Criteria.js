function sortAnArrayByTwoCriteria(arrForSorting) {

    function sortingTwoNums(a, b) {
        if (a.length === b.length) {
            return a.localeCompare((b));
        }
        return a.length - b.length;
    }
    let sorting = arrForSorting.sort((a, b) => sortingTwoNums(a, b));
    console.log(sorting.join('\n'));
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma', 'betda'])
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])



function sortAnArrayByTwoCriteria(arrForSorting) {

    let sorting = arrForSorting.sort(
        function(a, b) {
            // console.log(a, b)
            if (a.length === b.length) {
                return a.localeCompare((b));
            }
            return a.length - b.length;
        });
    console.log(sorting.join('\n'));
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma', 'betda'])
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])