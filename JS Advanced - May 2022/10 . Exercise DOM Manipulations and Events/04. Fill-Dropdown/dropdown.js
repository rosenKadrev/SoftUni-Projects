function addItem() {

    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let parentTag = document.getElementById('menu');

    let newOptionTag = document.createElement('option');
    newOptionTag.textContent = inputText.value;
    newOptionTag.value = inputValue.value;

    parentTag.appendChild(newOptionTag);
    inputText.value = '';
    inputValue.value = '';

}