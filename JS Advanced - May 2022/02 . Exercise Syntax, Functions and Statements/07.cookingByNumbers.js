function cookingByNumbers(...params) {

    let arr = params.splice('')
    let num = arr.shift();
    for (let iterator of arr) {
        if (iterator === 'chop') {
            num /= 2;
            console.log(num);
        } else if (iterator === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (iterator === 'spice') {
            num += 1;
            console.log(num);
        } else if (iterator === 'bake') {
            num *= 3;
            console.log(num);
        } else if (iterator === 'fillet') {
            num = num - num * 20 / 100;
            console.log(num);
        }
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')