function rotateArray(arrWithElements, rotateTimes) {

    for (let i = 0; i < rotateTimes; i++) {
        const elementForRotate = arrWithElements.pop();
        arrWithElements.unshift(elementForRotate)
    }

    console.log(arrWithElements.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2)
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)