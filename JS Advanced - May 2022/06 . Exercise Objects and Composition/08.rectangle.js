function rectangle(width, height, color) {

    const firstLetter = color[0].toUpperCase();
    color = color.substring(1);
    const newColor = firstLetter + color;

    const rect = {
        width,
        height,
        color: newColor,
        calcArea() {
            return rect.width * rect.height;
        }
    }
    return rect;

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());