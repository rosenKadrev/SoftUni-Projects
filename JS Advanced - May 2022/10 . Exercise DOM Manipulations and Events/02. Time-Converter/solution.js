function attachEventsListeners() {

    let click = document.querySelectorAll('input[type="button"]');
    Array.from(click).forEach(i => i.addEventListener('click', onClick));

    let idSearch = document.querySelectorAll('input[type="text"]');

    function onClick() {
        let id = '';
        let value = 0;
        for (let currentSearch of idSearch) {
            if (currentSearch.value != '') {
                id = currentSearch.id;
                value = Number(currentSearch.value);
            }
        }

        if (id == 'days') {
            document.querySelector('input[id="hours"]').value = value * 24;
            document.querySelector('input[id="minutes"]').value = value * 1440;
            document.querySelector('input[id="seconds"]').value = value * 86400;
        } else if (id == 'hours') {
            document.querySelector('input[id="days"]').value = (value / 24);
            document.querySelector('input[id="minutes"]').value = value * 60;
            document.querySelector('input[id="seconds"]').value = value * 3600;
        } else if (id == 'minutes') {
            document.querySelector('input[id="days"]').value = (value / 1440);
            document.querySelector('input[id="hours"]').value = (value / 60);
            document.querySelector('input[id="seconds"]').value = value * 60;
        } else if (id == 'seconds') {
            document.querySelector('input[id="days"]').value = (value / 86400);
            document.querySelector('input[id="hours"]').value = (value / 3600);
            document.querySelector('input[id="minutes"]').value = value / 60;
        }
    }

}