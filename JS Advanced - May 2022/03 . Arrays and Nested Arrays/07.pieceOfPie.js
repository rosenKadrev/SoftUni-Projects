function piceOfPie(arr, firstTarget, secondTarget) {

    const startString = arr.indexOf(firstTarget);
    const endString = arr.indexOf(secondTarget);
    const stringsForRemove = endString - startString;
    const pieceOfArr = arr.splice(startString, stringsForRemove + 1);
    return pieceOfArr;

}
console.log(piceOfPie(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))
console.log(piceOfPie(
    [
        'Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
))