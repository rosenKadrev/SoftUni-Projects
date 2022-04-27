function oddOccurrences(string) {

    let sortOddObj = {};
    let arrWithElements = string.split(' ');

    for (let element of arrWithElements) {
        let currentElement = (element).toLowerCase();
        if (!sortOddObj[currentElement]) {
            sortOddObj[currentElement] = 1;
        } else {
            sortOddObj[currentElement]++;

        }
    }

    let elementsForSortingArr = Object.entries(sortOddObj);
    elementsForSortingArr.sort((a, b) => b[1] - a[1]);
    let allWords = '';
    for (let [word, count] of elementsForSortingArr) {
        if (count % 2 !== 0) {
            allWords += word + ' ';
        }
    }
    console.log(`${allWords.trim()}`)
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')



function oddOccurrences(string) {

    let sortOddObj = {};
    let arrWithElements = string.split(' ');

    for (let element of arrWithElements) {
        let currentElement = (element).toLowerCase();
        if (!sortOddObj[currentElement]) {
            sortOddObj[currentElement] = 1;
        } else {
            sortOddObj[currentElement]++;
        }
    }
    let filtered = Object
        .entries(sortOddObj)
        .filter(([word, count]) => count % 2 == 1)
        .map(entry => entry[0])
        .join(' ')
    console.log(filtered);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')