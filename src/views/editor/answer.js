import { html, render } from "../../lib/lit-html.js";

const radioEdit = (questionIndex, index, value, checked) => html`
<div class="editor-input">
    <label class="radio">
        <input class="input" type="radio" name=${`question-${questionIndex}`} value=${index} ?checked=${checked}/>
        <i class="fas fa-check-circle"></i>
    </label>

    <input class="input" type="text" name=${`answer-${index}`} .value=${value} />
    <button data-index=${index} class="input submit action">
        <i class="fas fa-trash-alt"></i>
    </button>
</div>`

export function createAnswerList(answers, correctIndex, qIndex) {
    const current = answers;
    const element = document.createElement('div');
    element.addEventListener('click', onDelete);
    update();
    return element;

    function update() {
        render(html`
            ${answers.map((a, i) => radioEdit(qIndex, i, a, correctIndex == i))}
            <div class="editor-input">
                <button @click=${addAnswer} class="input submit action">
                    <i class="fas fa-plus-circle"></i>
                    Add answer
                </button>
            </div>`, element);
    }

    function addAnswer(event) {
        event.preventDefault();
        current.push('');
        update();
    }

    function onDelete(event) {
        let target = event.target;
        while (target && target != element && target.tagName != 'BUTTON') {
            target = target.parentNode;
        }
        const index = target.dataset.index;
        if (index != undefined) {
            event.preventDefault();
            current.splice(index, 1);
            update();
        }
    }
}