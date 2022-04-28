function matchDates(names) {

    let pattern = /\b(?<day>\d{2})(-|.|\/)(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g;
    let firstMatch = pattern.exec(names);

    while (firstMatch !== null) {
        let day = firstMatch[1];
        let month = firstMatch[3];
        let year = firstMatch[4];
        firstMatch = pattern.exec(names);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")