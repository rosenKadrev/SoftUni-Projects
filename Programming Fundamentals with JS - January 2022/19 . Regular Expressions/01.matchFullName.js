function matchFullName(names) {

    let pattern = /\b[A-Z]{1}[a-z]{1,}[ ]{1}[A-Z]{1}[a-z]{1,}\b/g;
    let validNames = [];
    let firstMatch = pattern.exec(names);
    while (firstMatch !== null) {
        validNames.push(firstMatch[0]);
        firstMatch = pattern.exec(names);
    }
    console.log(validNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")