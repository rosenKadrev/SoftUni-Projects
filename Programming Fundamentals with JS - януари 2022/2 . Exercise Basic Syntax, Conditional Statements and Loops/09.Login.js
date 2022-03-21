input = ['Acer', 'login', 'go', 'let me in', 'recA'];
// input = ['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'];
// input = ['momo', 'omom'];

function login(input) {

    let blockedCounter = 0;
    let username = input[0];
    let reversedUsername = username.split('').reverse().join('');

    let inputL = input.length;

    for (let j = 1; j < inputL; j++) {

        let currentPass = input[j];
        blockedCounter++;

        if (reversedUsername === currentPass) {
            console.log(`User ${username} logged in.`);
            return;
        }

        if (blockedCounter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        if (reversedUsername !== currentPass) {
            console.log(`Incorrect password. Try again.`);
        }
    }
}
login(input)