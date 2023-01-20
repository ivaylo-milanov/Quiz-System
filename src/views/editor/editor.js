import { html } from "../../lib/lit-html.js";
import { questionTemplate } from "./question.js";

const editorTemplate = (questions) => html`
<section id="editor">

    <header class="pad-large">
        <h1>New quiz</h1>
    </header>

    <div class="pad-large alt-page">
        <form>
            <label class="editor-label layout">
                <span class="label-col">Title:</span>
                <input class="input i-med" type="text" name="title"></label>
            <label class="editor-label layout">
                <span class="label-col">Topic:</span>
                <select class="input i-med" name="topic">
                    <option value="all">All Categories</option>
                    <option value="it">Languages</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Tools and Software</option>
                </select>
            </label>
            <input class="input submit action" type="submit" value="Save">
        </form>
    </div>

    <header class="pad-large">
        <h2>Questions</h2>
    </header>

    ${questionList(questions)}
</section>`;

const questionList = (questions) => {
    return html`
    <div id="questions" class="pad-large alt-page">
        ${questions.map((q, i) => questionTemplate(q, i + 1))}
    </div>
    
    <article class="editor-question">
        <div class="editor-input">
            <button class="input submit action">
                <i class="fas fa-plus-circle"></i>
                Add question
            </button>
        </div>
    </article>`;
}

const questions = [
    {
        text: 'question1',
        answers: [
            'Yes',
            'No',
            'Maybe'
        ],
        correctIndex: 0
    },
    {
        text: 'question2',
        answers: [
            'Yes',
            'No',
            'Maybe'
        ],
        correctIndex: 1
    }
]

export function showEditor(ctx) {
    ctx.renderView(editorTemplate(questions));
}