function lockedProfile() {

    let click = document.querySelectorAll("button");
    Array.from(click).forEach(i => i.addEventListener('click', onClick));

    function onClick(ev) {
        let parent = ev.target.parentElement;
        let currentTargetForShow = parent.querySelector('div');
        let isActive = parent.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            if (ev.target.textContent == 'Show more') {
                currentTargetForShow.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else if (ev.target.textContent == 'Hide it') {
                currentTargetForShow.style.display = '';
                ev.target.textContent = 'Show more';
            }
        }
    }

}