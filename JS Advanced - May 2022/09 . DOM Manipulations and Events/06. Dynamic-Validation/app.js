function validate() {

    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {

        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }

}



// function validate() {

//     document.getElementById('email').addEventListener('change', onChange);

//     function onChange({ target }) {

//         let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

//         if (pattern.test(target.value)) {
//             target.classList.remove('error');
//         } else {
//             target.classList.add('error');
//         }
//     }

// }