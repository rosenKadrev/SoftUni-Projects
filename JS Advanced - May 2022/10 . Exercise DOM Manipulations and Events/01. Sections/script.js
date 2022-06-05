function create(words) {

    let input = document.getElementById('content');

    for (let word of words) {
        let div = document.createElement('div');
        let p = document.createElement('p');

        p.style.display = 'none';
        p.textContent = word;

        div.appendChild(p);
        div.addEventListener('click', onClick);
        input.appendChild(div);
    }

    function onClick(event) {
        event.currentTarget.children[0].style.display = 'block';
    }

}