function editElement(element, oldString, newString) {

    const text = element.textContent;
    const matcher = new RegExp(oldString, 'g');
    const textEdit = text.replace(matcher, newString)
    element.textContent = textEdit;

}