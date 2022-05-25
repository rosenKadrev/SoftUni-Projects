function sortingnumbers(arrWithElements) {

    let arrWithResult = [];
    const arrWithElementsL = arrWithElements.length;
    arrWithElements.sort((a, b) => a - b);
    for (let i = 0; i < arrWithElementsL; i += 2) {
        const firstAdd = arrWithElements.shift();
        const lastAdd = arrWithElements.pop();
        arrWithResult.push(firstAdd);
        arrWithResult.push(lastAdd);

    }
    return arrWithResult;

}
sortingnumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])