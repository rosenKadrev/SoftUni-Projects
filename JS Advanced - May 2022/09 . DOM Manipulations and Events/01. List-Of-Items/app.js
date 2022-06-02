function addItem() {

    let input = document.getElementById('newItemText').value;
    let newElement = document.createElement('li');

    newElement.textContent = input;
    document.getElementById('items').appendChild(newElement);
    document.getElementById('newItemText').value = '';

}