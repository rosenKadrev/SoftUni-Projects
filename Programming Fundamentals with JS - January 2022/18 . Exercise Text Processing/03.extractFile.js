function extractFile(string) {

    let lastIndexString = string.lastIndexOf('\\');
    let fileNameAndExtension = string.slice(lastIndexString + 1);

    let lastIndexfileNameAndExtension = fileNameAndExtension.lastIndexOf('.');
    let finalName = fileNameAndExtension.slice(0, lastIndexfileNameAndExtension);
    let finalExtension = fileNameAndExtension.slice(lastIndexfileNameAndExtension + 1);

    console.log(`File name: ${finalName}` + '\n' + `File extension: ${finalExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')