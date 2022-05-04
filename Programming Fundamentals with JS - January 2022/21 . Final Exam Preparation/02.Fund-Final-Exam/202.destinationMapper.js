function destinationMapper(text) {

    let pattern = /(\/|=)([A-Z]{1}[A-Za-z]{2,})(?:\1)/g;
    let firstMatch = pattern.exec(text);
    let allDestinations = [];
    let allPoints = 0;

    while (firstMatch !== null) {
        let destinationName = firstMatch[2];
        let destinationLength = Number(destinationName.length);
        allDestinations.push(destinationName);
        allPoints += destinationLength;
        firstMatch = pattern.exec(text);
    }

    console.log(`Destinations: ${allDestinations.join(', ')}`);
    console.log(`Travel Points: ${allPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");