function loadingBar(num) {

    let arr = [];

    for (let i = 10; i <= 100; i += 10) {
        let element = i;
        if (element <= num) {
            arr.push('%')
        } else {
            arr.push('.')
        }
    }
    let a = arr.join('')
    if (num !== 100) {
        console.log(`${num}% [${a}]` + '\n' + `Still loading...`);
    } else if (num === 100) {
        console.log(`100% Complete!` + '\n' + `[${a}]`);
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)



function loadingBarr(num) {
    let percentage = '%'.repeat(num / 10);
    let dots = '.'.repeat(10 - num / 10);

    if (num !== 100) {
        console.log(`${num}% [${percentage}${dots}]` + '\n' + `Still loading...`);
    } else if (num === 100) {
        console.log(`100% Complete!` + '\n' + `[${percentage}]`);
    }
}
loadingBarr(30)
loadingBarr(50)
loadingBarr(100)