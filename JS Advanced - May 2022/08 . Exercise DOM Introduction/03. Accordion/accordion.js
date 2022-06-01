function toggle() {

    let textForView = document.getElementById('extra');

    if (document.getElementsByClassName('button')[0].textContent == 'More') {
        document.getElementsByClassName('button')[0].textContent = 'Less';
        textForView.style.display = 'block';
    } else if (document.getElementsByClassName('button')[0].textContent == 'Less') {
        document.getElementsByClassName('button')[0].textContent = 'More';
        textForView.style.display = 'none';
    }

}



function toggle() {

    let textElement = document.getElementById('extra');
    let buttonElement = document.getElementsByClassName('button')[0];

    if (buttonElement.textContent == 'More') {
        buttonElement.textContent = 'Less';
        textElement.style.display = 'block'
    } else {
        buttonElement.textContent = 'More';
        textElement.style.display = 'none'
    }

}