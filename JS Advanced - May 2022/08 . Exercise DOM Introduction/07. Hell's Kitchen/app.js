function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        let inputWithRestaurantInfo = JSON.parse(document.querySelector('div#inputs textarea').value);
        let bestRestaurantName = '';
        let avgSalary = 0;
        let currentAvgSalary = 0;
        let bestSalary = 0;
        let objForStoreRestaurantInfo = {};
        let objWithSalary = {};
        let boolean = false;

        for (let currentRestaurant of inputWithRestaurantInfo) {
            let destructureForName = currentRestaurant.split(' - ');
            let restaurantName = destructureForName.shift();
            let destructureForWorkersAndSalary = destructureForName[0].split(', ');
            let workersCount = 0;

            for (let workerInfo of destructureForWorkersAndSalary) {
                let nameAndSalary = workerInfo.split(' ');
                let name = nameAndSalary[0];
                let salary = Number(nameAndSalary[1]);
                if (!objForStoreRestaurantInfo.hasOwnProperty(restaurantName)) {
                    objForStoreRestaurantInfo[restaurantName] = {};
                    objForStoreRestaurantInfo[restaurantName][name] = salary;
                    currentAvgSalary += salary;
                    workersCount++;
                } else {
                    if (!objForStoreRestaurantInfo[restaurantName].hasOwnProperty(name)) {
                        objForStoreRestaurantInfo[restaurantName][name] = salary;
                        let newSalary = objWithSalary[restaurantName].avg * objWithSalary[restaurantName].workerNum + salary;
                        objWithSalary[restaurantName].workerNum++;
                        objWithSalary[restaurantName].avg = newSalary / objWithSalary[restaurantName].workerNum;
                        boolean = true;

                    } else {
                        objForStoreRestaurantInfo[restaurantName][name] += salary;
                        newSalary = objWithSalary[restaurantName].avg * objWithSalary[restaurantName].workerNum + salary;
                        objWithSalary[restaurantName].workerNum++;
                        objWithSalary[restaurantName].avg = newSalary / objWithSalary[restaurantName].workerNum;
                        boolean = true;
                    }
                }

                if (!boolean) {
                    avgSalary = currentAvgSalary / workersCount;
                    objWithSalary[restaurantName] = {};
                    objWithSalary[restaurantName].avg = avgSalary;
                    objWithSalary[restaurantName].workerNum = workersCount;
                }
            }
            if (objWithSalary[restaurantName].avg > bestSalary) {
                bestSalary = objWithSalary[restaurantName].avg;
                bestRestaurantName = restaurantName;
            }
            workersCount = 0;
            currentAvgSalary = 0;
            boolean = false;

        }
        let sortBestSalary = Object.entries(objForStoreRestaurantInfo[bestRestaurantName]).sort((a, b) => b[1] - a[1]);
        let forBestWorkers = [];

        sortBestSalary.forEach(arr => {
            let text = forBestWorkers.push(`Name: ${arr[0]} With Salary: ${arr[1]}`);
        });


        let forBestRestaurant = `Name: ${bestRestaurantName} Average Salary: ${bestSalary.toFixed(2)} Best Salary: ${sortBestSalary[0][1].toFixed(2)}`;
        document.querySelector('#bestRestaurant p').textContent = forBestRestaurant;
        document.querySelector('#workers p').textContent = forBestWorkers.join(' ');

    }
}



function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    //`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`

    //`Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`
    function onClick() {
        //   TODO:
        let inputElement = document.querySelector('#inputs textarea');
        let input = JSON.parse(inputElement.value);
        //['PizzaHut - Peter 500, George 300, Mark 800', 'TheLake - Bob 1300, Joe 780, Jane 660']
        let obj = {};
        let averageSalary = 0;
        let bestSalary = 0;
        let bestNameRestourant = '';

        for (let line of input) {
            let arr = line.split(' - ');
            let curentName = arr.shift();
            let arrWorkers_Salary = arr[0].split(', ');
            let tempObj = {};

            arrWorkers_Salary.forEach(element => {
                let tempArrWorkerSalary = element.split(' ');

                let [name, salary1] = tempArrWorkerSalary;

                salary1 = Number(salary1);

                tempObj[name] = salary1;

                if (!obj.hasOwnProperty(curentName)) {
                    obj[curentName] = tempObj;
                } else {
                    obj[curentName][name] = salary1;
                };
            });
        };

        for (let key of Object.keys(obj)) {
            let objWorkers = obj[key];
            let sortedSalaries = Object.values(objWorkers).sort((a, b) => b - a);

            let allSalaries = sortedSalaries.reduce((a, b) => a + b);
            let curentAverageSalary = allSalaries / sortedSalaries.length;

            if (curentAverageSalary > averageSalary) {
                averageSalary = curentAverageSalary;
                bestNameRestourant = key;
                bestSalary = sortedSalaries[0];
            };
        };

        document.querySelector('#bestRestaurant p').textContent = `Name: ${bestNameRestourant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

        let sortedWorkersWithSalaiesArr = Object.entries(obj[bestNameRestourant]).sort((a, b) => b[1] - a[1]);
        let print = [];
        sortedWorkersWithSalaiesArr.forEach(arr => {
            let text = print.push(`Name: ${arr[0]} With Salary: ${arr[1]}`);
        });

        document.querySelector('#workers p').textContent = print.join(' ');
    }
}