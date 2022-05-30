function extract(content) {

    let stringWithMatch = '';
    content = document.getElementById('content').textContent;
    const rexExp = /\((.+?)\)/g;
    let firstMatch = rexExp.exec(content);

    while (firstMatch != null) {
        stringWithMatch += firstMatch[1] + ';' + ' ';
        firstMatch = rexExp.exec(content);
    }

    stringWithMatch = stringWithMatch.substring(0, stringWithMatch.length - 2);
    return stringWithMatch;

}