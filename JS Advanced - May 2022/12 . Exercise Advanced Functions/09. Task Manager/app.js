function solve() {

    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('date');
    const [_, openSection, progressSection, finishSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);

    document.getElementById('add').addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if (taskInput.value && descriptionInput.value && dueDateInput.value) {
            const article = document.createElement('article');
            openSection.appendChild(article);

            const h3 = document.createElement('h3');
            h3.textContent = taskInput.value;
            article.appendChild(h3);

            const pOne = document.createElement('p');
            pOne.textContent = `Description: ${descriptionInput.value}`;
            article.appendChild(pOne);

            const pTwo = document.createElement('p');
            pTwo.textContent = `Due Date: ${dueDateInput.value}`;
            article.appendChild(pTwo);

            const div = document.createElement('div');
            div.classList.add('flex');
            article.appendChild(div);

            const buttonOne = document.createElement('button');
            buttonOne.classList.add('green');
            buttonOne.textContent = `Start`;
            div.appendChild(buttonOne);

            const buttonTwo = document.createElement('button');
            buttonTwo.classList.add('red');
            buttonTwo.textContent = `Delete`;
            div.appendChild(buttonTwo);

            const buttonThree = document.createElement('button');
            buttonThree.classList.add('orange');
            buttonThree.textContent = `Finish`;

            taskInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';

            buttonOne.addEventListener('click', onStart);
            buttonTwo.addEventListener('click', onDelete);
            buttonThree.addEventListener('click', onFinish);

            function onDelete() {
                article.remove();
            }

            function onStart() {
                buttonOne.remove();
                div.appendChild(buttonThree);
                progressSection.appendChild(article);
            }

            function onFinish() {
                div.remove();
                finishSection.appendChild(article);
            }
        }
    }
}



function solve() {

    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }

    const [_, openSection, progressSection, finishSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);
    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        if (input.name.value && input.description.value && input.date.value) {
            const article = document.createElement('article');

            article.appendChild(createTags('h3', input.name.value));
            article.appendChild(createTags('p', `Description: ${input.description.value}`));
            article.appendChild(createTags('p', `Due Date: ${input.date.value}`));
            const div = createTags('div', '', 'flex');

            const startButton = createTags('button', 'Start', 'green');
            const deleteButton = createTags('button', 'Delete', 'red');
            const finishButton = createTags('button', 'Finish', 'orange');

            div.appendChild(startButton);
            div.appendChild(deleteButton);
            article.appendChild(div);
            openSection.appendChild(article);

            Object.values(input).forEach(i => i.value = '');

            startButton.addEventListener('click', onStart);
            deleteButton.addEventListener('click', onDelete);
            finishButton.addEventListener('click', onFinish);

            function onDelete() {
                article.remove();
            }

            function onStart() {
                startButton.remove();
                div.appendChild(finishButton);
                progressSection.appendChild(article);
            }

            function onFinish() {
                div.remove();
                finishSection.appendChild(article);
            }

            function createTags(type, content, className) {
                const element = document.createElement(type);
                element.textContent = content;
                if (className) {
                    element.className = className;
                }
                return element;
            }
        }
    }
}