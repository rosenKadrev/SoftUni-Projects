function cone(radius, height) {

    let volume = ((Math.PI * Math.pow(radius, 2) * height) / 3).toFixed(4);

    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let l = Math.PI * radius * s;
    let b = Math.PI * Math.pow(radius, 2);
    let area = (l + b).toFixed(4);

    console.log('volume = ' + volume + '\n' + 'area = ' + area);

}
cone(3, 5)
cone(3.3, 7.8)