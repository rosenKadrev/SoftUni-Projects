function solve() {

    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);

    document.querySelectorAll('tbody tr')[0].querySelectorAll('td')[4].children[0].disabled = false;

    function generate(ev) {
        let convertInput = JSON.parse(document.querySelector('textarea').value);
        for (let currentConvertInfo of convertInput) {

            let tr = document.createElement('tr');

            let tdOne = document.createElement('td');
            let img = document.createElement('img');
            img.src = currentConvertInfo.img;
            tdOne.appendChild(img);
            tr.appendChild(tdOne);

            let tdTwo = document.createElement('td');
            let pOne = document.createElement('p');
            pOne.textContent = currentConvertInfo.name;
            tdTwo.appendChild(pOne);
            tr.appendChild(tdTwo);

            let tdThree = document.createElement('td');
            let pTwo = document.createElement('p');
            pTwo.textContent = currentConvertInfo.price;
            tdThree.appendChild(pTwo);
            tr.appendChild(tdThree);

            let tdFour = document.createElement('td');
            let pThree = document.createElement('p');
            pThree.textContent = currentConvertInfo.decFactor;
            tdFour.appendChild(pThree);
            tr.appendChild(tdFour);

            let tdFive = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'checkbox';
            tdFive.appendChild(input);
            tr.appendChild(tdFive);

            document.getElementsByTagName('tbody')[0].appendChild(tr);
        }
    }

    function buy(ev) {
        let boughtFurniture = '';
        let totalPrice = 0;
        let counter = 0;
        let avgDecorationFactor = 0
        let trForTour = document.querySelectorAll('tbody tr');

        for (let currentTr of trForTour) {
            let isActive = currentTr.querySelectorAll('td')[4].children[0].checked;
            if (isActive) {
                boughtFurniture += currentTr.querySelectorAll('td')[1].children[0].textContent + ', ';
                totalPrice += Number(currentTr.querySelectorAll('td')[2].children[0].textContent);
                avgDecorationFactor += Number(currentTr.querySelectorAll('td')[3].children[0].textContent);
                counter++;
            }
        }

        avgDecorationFactor = avgDecorationFactor / counter;
        let output = document.querySelectorAll('textarea')[1];
        output.value += `Bought furniture: ${boughtFurniture.slice(0, -2)}\r\n`;
        output.value += `Total price: ${totalPrice.toFixed(2)}\r\n`;
        output.value += `Average decoration factor: ${avgDecorationFactor}`;
    }

}