function solve() {

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const commands = {
        restock,
        prepare,
        report
    }

    return manager;

    function manager(line) {
        const [command, param, qty] = line.split(' ');
        return commands[command](param, qty);
    }

    function restock(type, qty) {
        stock[type] += Number(qty);
        return 'Success';
    }

    function prepare(recipeString, qty) {
        qty = Number(qty);
        const recipe = Object.entries(recipes[recipeString]);
        recipe.forEach(ingredient => ingredient[1] *= qty);
        for (let [ingredient, required] of recipe) {
            if (stock[ingredient] < required) {
                return `Error: not enough ${ingredient} in stock `;
            }
        }
        recipe.forEach(([ingredient, required]) => stock[ingredient] -= required);
        return 'Success';

    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }

}
let manager = solve();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));



// function solution() {
//     const stock = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
//     const recipeMap = {
//         apple: { carbohydrate: 1, flavour: 2 },
//         lemonade: { carbohydrate: 10, flavour: 20 },
//         burger: { carbohydrate: 5, fat: 7, flavour: 3 },
//         eggs: { protein: 5, fat: 1, flavour: 1 },
//         turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
//     };
//     const commandsMap = {
//         restock: (elem, n) => {
//             stock[elem] += n;
//             return 'Success';
//         },
//         prepare: (recipt, n) => {
//             const productNeeded = Object.entries(recipeMap[recipt]).map(e => [e[0], e[1] * n]);
//             const isPeparationValid = productNeeded.every(e => stock[e[0]] > e[1]);

//             if (isPeparationValid) {
//                 productNeeded.forEach(kvp => stock[kvp[0]] -= kvp[1]);
//                 return 'Success';
//             }
//             return `Error: not enough ${productNeeded.find(kvp => stock[kvp[0]] < kvp[1])[0]} in stock`;
//         },
//         report: () => Object.entries(stock).map(kvp => `${kvp[0]}=${kvp[1]}`).join(' '),
//     };

//     return function manage(str) {
//         const [command, microelem, n] = str.split(' ');
//         return commandsMap[command](microelem, Number(n));
//     }
// }
// let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
// console.log(manager("restock carbohydrate 10")); // Success 
// console.log(manager("restock flavour 10")); // Success 
// console.log(manager("prepare apple 1")); // Success 
// console.log(manager("restock fat 10")); // Success 
// console.log(manager("prepare burger 1")); // Success 
// console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55