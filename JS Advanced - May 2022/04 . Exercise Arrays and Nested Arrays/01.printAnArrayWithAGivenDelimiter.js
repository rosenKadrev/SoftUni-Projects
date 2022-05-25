function printAnArrayWithGivenDelimiter(arrOfStrings, delimiter) {

    const result = arrOfStrings.join(delimiter);
    console.log(result);

}
printAnArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-')
printAnArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_')