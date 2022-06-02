function attachGradientEvents() {

    let gredient = document.getElementById('gradient');
    gredient.addEventListener('mousemove', onMouseOver);
    let result = document.getElementById('result');

    function onMouseOver(ev) {

        result.textContent = Math.floor(ev.offsetX / gredient.clientWidth * 100) + '%';
    }

}