import { createQuiz } from "../api/data.js";
import { html } from "../lib/lit-html.js";
import { createSubmitHandler } from "../utils.js";
import { questionTemplate } from "./questionTemplate.js";

export function showCreate(ctx) {
    ctx.renderView(createTemplate(createSubmitHandler(onSubmit, ctx)));

    async function onSubmit({ title, topic, description, questionCount }) {
        questionCount = parseInt(questionCount);
        const userId = ctx.user?.objectId;
        const result = await createQuiz({ title, topic, description, questionCount }, userId);
        ctx.page.redirect(`/browse`);
    }
}
function createTemplate(handler) {
    return html`
    <section id="editor">
    
        <header class="pad-large">
            <h1>New quiz</h1>
        </header>
    
        <div class="pad-large alt-page">
            <form @submit=${handler}>
                <label class="editor-label layout">
                    <span class="label-col">Title:</span>
                    <input class="input i-med" type="text" name="title"></label>
                <label class="editor-label layout">
                    <span class="label-col">Topic:</span>
                    <input class="input i-med" type="text" name="topic"></label>
                </label>
                <label class="editor-label layout">
                    <span class="label-col">Description:</span>
                    <textarea class="input i-med" type="text" name="description"></textarea>
                </label>
                <label class="editor-label layout">
                    <span class="label-col">Question count:</span>
                    <input class="input i-med" type="number" name="questionCount">
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