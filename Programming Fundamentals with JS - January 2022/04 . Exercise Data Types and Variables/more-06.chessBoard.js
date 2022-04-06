function chessBoard(n) {

    console.log(`<div class="chessboard">`);
    let counter = 0;

    for (let i = 1; i <= n; i++) {

        console.log(`  <div>`);
        counter++;

        for (let j = 1; j <= n; j++) {

            let currentN = j;

            if (counter % 2 !== 0) {
                if (currentN % 2 !== 0) {
                    console.log('    <span class="black"></span>');
                } else {
                    console.log('    <span class="white"></span>');
                }
            } else {
                if (currentN % 2 !== 0) {
                    console.log('    <span class="white"></span>');
                } else {
                    console.log('    <span class="black"></span>');
                }
            }
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}
chessBoard(3)