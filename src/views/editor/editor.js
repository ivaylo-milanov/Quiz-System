import { html } from "../../lib/lit-html.js";
import { createQuestion } from "./question.js";

const template = (questions) => html`
<section id="editor">

    <header class="pad-large">
        <h1>New quiz</h1>
    </header>

    <div class="pad-large alt-page">
        <form>
            <label class="editor-label layout">
                <span class="label-col">Title:</span>
                <input class="input i-med" type="text" name="title">
            </label>
            <label class="editor-label layout">
                <span class="label-col">Topic:</span>
                <select class="input i-med" name="topic">
                    <option value="all">All Categories</option>
                    <option value="it">Languages</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Tools and Software</option>
                </select>
            </label>
            <label class="editor-label layout">
                <span class="label-col">Description:</span>
                <textarea class="input i-med" type="text" name="description"></textarea>
            </label>
            <input class="input submit action" type="submit" value="Save">
        </form>
    </div>

    <header class="pad-large">
        <h2>Questions</h2>
    </header>

    ${questionList(questions)}
</section>`;

const questionList = (questions) => html`
    ${questions.map((q, i) => createQuestion(q, i + 1))}
    
    <article class="editor-question">
        <div class="editor-input">
            <button class="input submit action">
                <i class="fas fa-plus-circle"></i>
                Add question
            </button>
        </div>
    </article>`;

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
    ctx.renderView(template(questions));
}