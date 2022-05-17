function easterEggs(arr) {

    let text = arr[0];
    let pattern = /([@#]{1,})([a-z]{3,})([@#]{1,})([^a-zA-Z0-9]*)\/{1,}(\d+)\/{1,}/g

    let firstMatch = pattern.exec(text);

    while (firstMatch !== null) {
        console.log(`You found ${firstMatch[5]} ${firstMatch[2]} eggs!`);
        firstMatch = pattern.exec(text);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])