// function buildAWall(arr) {

//     let lengthOfWall = arr.length;
//     let priceForOneCubicMeterConcrete = 1900;
//     let maxFeetOnEveryPieceOfWall = 30;
//     let arrWithConcrete = [];
//     let cubicMeterConcretePerDay = 0;

//     let reducer = (a, b) => a + b;
//     let sum = arr.reduce(reducer);

//     while (sum !== lengthOfWall * maxFeetOnEveryPieceOfWall) {
//         for (let i = 0; i < lengthOfWall; i++) {
//             let currentElementOfWall = arr[i];
//             if (currentElementOfWall < maxFeetOnEveryPieceOfWall) {
//                 arr[i]++;
//                 cubicMeterConcretePerDay += 195;
//             }
//         }
//         arrWithConcrete.push(cubicMeterConcretePerDay);
//         cubicMeterConcretePerDay = 0;
//         sum = arr.reduce(reducer);
//     }

//     let allPriceForConcrete = (arrWithConcrete.reduce(reducer)) * priceForOneCubicMeterConcrete;
//     console.log(arrWithConcrete.join(', ') + '\n' + `${allPriceForConcrete} pesos`);
// }
// buildAWall([21, 25, 28])
// buildAWall([17])
// buildAWall([17, 22, 17, 19, 17])



function buildAWall(heightOfSectionsAsArr) {
    heightOfSectionsAsArr = heightOfSectionsAsArr.map(Number);
    let concreteUsedForEverySingleDayAsArr = [];
    heightOfSectionsAsArr = heightOfSectionsAsArr.filter((x) => x != 30);

    while (heightOfSectionsAsArr.length > 0) {

        concreteUsedForEverySingleDayAsArr.push(heightOfSectionsAsArr.length * 195);

        heightOfSectionsAsArr = heightOfSectionsAsArr.map((x) => x + 1);

        heightOfSectionsAsArr = heightOfSectionsAsArr.filter((x) => x != 30);
    }
    let totalConcrete = concreteUsedForEverySingleDayAsArr.reduce((a, b) => a + b);
    let totalConcreteInPesos = totalConcrete * 1900;

    console.log(`${concreteUsedForEverySingleDayAsArr.join(', ')}\n${totalConcreteInPesos} pesos`);
}
buildAWall([21, 25, 28])
buildAWall([17])
buildAWall([17, 22, 17, 19, 17])