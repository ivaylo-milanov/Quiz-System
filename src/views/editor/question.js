import { html, render } from "../../lib/lit-html.js";
import { answerTemplate } from "./answer.js";

export const questionTemplate = (data, index, onEdit) => html`
    <article class="editor-question">
        <div class="layout">
            <div class="question-control">
                <button ${onEdit} class="input submit action"><i class="fas fa-edit"></i> Edit</button>
                <button class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
            </div>
            <h3>Question ${index}</h3>
        </div>
        <form>
            <p class="editor-input">${data.text}</p>
            ${data.answers.map(x => answerTemplate(x))}
        </form>
    </article>`;
