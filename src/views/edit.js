import { createQuiz, editQuiz } from "../api/data.js";
import { html } from "../lib/lit-html.js";
import { createSubmitHandler } from "../utils.js";
import { questionTemplate } from "./questionTemplate.js";

export function showEdit(ctx) {
    ctx.renderView(editTemplate(createSubmitHandler(onSubmit, ctx), ctx.quiz));

    async function onSubmit({ title, topic, description, questionCount }) {
        const id = ctx.params.id;
        questionCount = parseInt(questionCount);
        await editQuiz({ title, topic, description, questionCount }, id, ctx.user.objectId);
        ctx.page.redirect(`/details/${id}`);
    }
}
function editTemplate(handler, quiz) {
    return html`
    <section id="editor">
    
        <header class="pad-large">
            <h1>New quiz</h1>
        </header>
    
        <div class="pad-large alt-page">
            <form @submit=${handler}>
                <label class="editor-label layout">
                    <span class="label-col">Title:</span>
                    <input class="input i-med" type="text" name="title" .value=${quiz.title}></label>
                <label class="editor-label layout">
                    <span class="label-col">Topic:</span>
                    <input class="input i-med" type="text" name="topic" .value=${quiz.topic}></label>
                </label>
                <label class="editor-label layout">
                    <span class="label-col">Description:</span>
                    <textarea class="input i-med" type="text" name="description" .value=${quiz.description}></textarea>
                </label>
                <label class="editor-label layout">
                    <span class="label-col">Question count:</span>
                    <input class="input i-med" type="number" name="questionCount" .value=${quiz.questionCount}>
                </label>
                <input class="input submit action" type="submit" value="Save">
            </form>
        </div>
    
        <!-- <header class="pad-large">
            <h2>Questions</h2>
        </header>
    
        <div id="questions" class="pad-large alt-page">
            ${questionTemplate()}
        </div> -->
    </section>`
}