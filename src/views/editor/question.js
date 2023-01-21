import { html, render } from "../../lib/lit-html.js";
import { createAnswerList } from "./answer.js";

const questionTemplate = ({ answers, correctIndex, text }, index, onEdit, onDelete) => html`
    <div class="layout">
        <div class="question-control">
            <button @click=${onEdit} class="input submit action"><i class="fas fa-edit"></i> Edit</button>
            <button @click=${onDelete} class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
        </div>
        <h3>Question ${index}</h3>
    </div>
    <form>
        <p class="editor-input">${text}</p>
        ${answers.map((a, i) => radioView(a, correctIndex == i))}
    </form>`;

const radioView = (value, checked) => html`
<div class="editor-input">
    <label class="radio">
        <input class="input" type="radio" disabled ?checked=${checked} />
        <i class="fas fa-check-circle"></i>
    </label>
    <span>${value}</span>
</div>`

const editorTemplate = ({ answers, correctIndex, text }, index, onSave, onDelete) => html`
<div class="layout">
    <div class="question-control">
        <button @click=${onSave} class="input submit action"><i class="fas fa-check-double"></i>
            Save</button>
        <button @click=${onDelete} class="input submit action"><i class="fas fa-times"></i> Cancel</button>
    </div>
    <h3>Question ${index}</h3>
</div>
<form>
    <textarea class="input editor-input editor-text" name="text" placeholder="Enter question">${text}</textarea>
    ${createAnswerList(answers, correctIndex, index)}
</form>`

export function createQuestion(question, index) {
    const element = document.createElement('article');
    element.className = 'editor-question';

    showView();

    return element;

    function onEdit() {
        showEditor();
    }

    function onDelete() {
        const confirmed = confirm('You sure?');

        if (confirmed) {
            element.remove();
        }
    }

    function onCancel() {
        showView();
    }

    function onSave() {
        console.log('Save');
    }

    function showView() {
        render(questionTemplate(question, index, onEdit, onDelete), element);
    }

    function showEditor() {
        render(editorTemplate(question, index, onSave, onCancel), element);
    }
}
