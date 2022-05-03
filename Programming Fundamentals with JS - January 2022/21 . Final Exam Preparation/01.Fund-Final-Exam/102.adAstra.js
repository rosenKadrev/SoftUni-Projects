function adAstra(arr) {

    let text = arr[0];
    let pattern = /(\||#)([A-Za-z]+\s?[A-Za-z]+)(\1)(\d{2}\/\d{2}\/\d{2})(\1)(\d{1,5})(\1)/g;

    let firstMatch = pattern.exec(text);
    let allSumOfCalories = 0;
    let arrWithSortFruits = [];

    while (firstMatch !== null) {
        let fruitName = firstMatch[2];
        let fruitDate = firstMatch[4];
        let fruitCalories = Number(firstMatch[6]);
        arrWithSortFruits.push(fruitName)
        arrWithSortFruits.push(fruitDate)
        arrWithSortFruits.push(fruitCalories)

        allSumOfCalories += fruitCalories;
        firstMatch = pattern.exec(text);
    }
    let daysWithCurrentCalories = Math.trunc(allSumOfCalories / 2000);
    console.log(`You have food to last you for: ${daysWithCurrentCalories} days!`);

    for (let i = 0; i < arrWithSortFruits.length; i += 3) {
        console.log(`Item: ${arrWithSortFruits[i]}, Best before: ${arrWithSortFruits[i+1]}, Nutrition: ${arrWithSortFruits[i+2]}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])