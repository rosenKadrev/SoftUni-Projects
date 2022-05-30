function colorize() {

    let list = document.getElementsByTagName('tr');
    for (let i = 1; i < list.length; i += 2) {
        list[i].style.backgroundColor = 'teal'
    }

}



// function colorizeRows() {
//     let rows = document.
//     querySelectorAll("table tr");
//     let index = 0;
//     for (let row of rows) {
//         index++;
//         if (index % 2 == 0)
//             row.style.background = "teal";
//     }
// }