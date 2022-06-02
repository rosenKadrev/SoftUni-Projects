function deleteByEmail() {

    let value = document.querySelector('input[name="email"]').value;
    let rows = document.querySelectorAll('tbody tr')
    let arrRows = Array.from(rows);
    let found = false;
    for (let row of arrRows) {
        if (row.children[1].textContent == value) {
            let parent = row.parentNode;
            parent.removeChild(row);
            // row.remove()
            found = true;
        }
    }
    if (found) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }

}