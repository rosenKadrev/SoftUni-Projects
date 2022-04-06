function triangleOfNumbers(number) {

    let rol = '';

    for (let i = 1; i <= number; i++) {
        rol = i.toString() + ' ';
        if (i !== 1) {
            for (let j = 2; j <= i; j++) {
                rol += i.toString() + ' ';
            }
        }
        console.log(rol);
        rol = '';
    }
}
triangleOfNumbers(3)
triangleOfNumbers(5)
triangleOfNumbers(6) 