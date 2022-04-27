function bookShelf(arr) {

    let sortData = {};
    let idObj = {};

    for (let iteratorA of arr) {
        if (iteratorA.includes('->')) {
            let [shelfId, shelfGenre] = iteratorA.split(' -> ');
            if (!idObj.hasOwnProperty(shelfId)) {
                idObj[shelfId] = shelfGenre;
            }
        } else if (iteratorA.includes(':')) {
            let [bookinfo, bookGenre] = iteratorA.split(', ');
            let keys = Object.keys(idObj);
            let values = Object.values(idObj);
            if (values.includes(bookGenre)) {
                let index = values.indexOf(bookGenre);
                if (!sortData.hasOwnProperty(keys[index])) {
                    sortData[keys[index]] = {}
                }
                if (!sortData[keys[index]].hasOwnProperty(bookGenre)) {
                    sortData[keys[index]][bookGenre] = []
                    sortData[keys[index]][bookGenre].push(bookinfo);
                } else {
                    sortData[keys[index]][bookGenre].push(bookinfo);
                }
            }
        }
    }

    let arrForSorting = Object.entries(sortData);
    for (let i = 0; i < arrForSorting.length; i++) {
        let element = arrForSorting[i];
        let size = Object.values(element[1]);
        arrForSorting[i].push(size[0].length);
    }

    arrForSorting = arrForSorting.sort((a, b) => b[2] - a[2]);
    for (let iteratorB of arrForSorting) {
        let name = iteratorB[0]; //3
        let bookCount = iteratorB[2]; //3
        let arrForSortingOne = Object.entries(iteratorB[1])
        for (let iteratorC of arrForSortingOne) {
            let nameOne = iteratorC[0]; // sci-fi
            console.log(`${name} ${nameOne}: ${bookCount}`);
            iteratorC[1].sort((a, b) => a[0].localeCompare(b[0]));
            for (let iteratorD of iteratorC[1]) {
                console.log(`--> ${iteratorD}`);
            }
        }
    }
}
bookShelf([
        '1 -> history',
        '1 -> action',
        'Death in Time: Criss Bell, mystery',
        '2 -> mystery',
        '3 -> sci-fi',
        'Child of Silver: Bruce Rich, mystery',
        'Hurting Secrets: Dustin Bolt, action',
        'Future of Dawn: Aiden Rose, sci-fi',
        'Lions and Rats: Gabe Roads, history',
        '2 -> romance',
        'Effect of the Void: Shay B, romance',
        'Losing Dreams: Gail Starr, sci-fi',
        'Name of Earth: Jo Bell, sci-fi',
        'Pilots of Stone: Brook Jay, history'
    ])
    // bookShelf(['1 -> mystery', '2 -> sci-fi',
    //     'Child of Silver: Bruce Rich, mystery',
    //     'Lions and Rats: Gabe Roads, history',
    //     'Effect of the Void: Shay B, romance',
    //     'Losing Dreams: Gail Starr, sci-fi',
    //     'Name of Earth: Jo Bell, sci-fi'
    // ])