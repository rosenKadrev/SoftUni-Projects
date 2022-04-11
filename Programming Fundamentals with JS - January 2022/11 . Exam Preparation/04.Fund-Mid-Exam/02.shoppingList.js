function shoppingList(arrComands) {

    let arrWithGroceres = arrComands.shift().split('!'); // ['Tomatoes', 'Potatoes', 'Bread']
    let i = 0;

    while (arrComands[i] !== "Go Shopping!") {
        let currentComand = arrComands[i].split(' '); // ['Unnecessary', 'Milk'], ['Urgent', 'Tomatoes']
        let index = arrWithGroceres.indexOf(currentComand[1]);

        switch (currentComand[0]) {
            case 'Urgent':
                if (index === -1) {
                    arrWithGroceres.unshift(currentComand[1]);
                }
                break;
            case 'Unnecessary':
                if (index !== -1) {
                    arrWithGroceres.splice(index, 1);
                }
                break;
            case 'Correct':
                if (index !== -1) {
                    arrWithGroceres.splice(index, 1, currentComand[2]);
                }
                break;
            case 'Rearrange':
                if (index !== -1) {
                    arrWithGroceres.splice(index, 1);
                    arrWithGroceres.push(currentComand[1]);
                }
                break;
        }
        i++;
    }
    console.log(arrWithGroceres.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])