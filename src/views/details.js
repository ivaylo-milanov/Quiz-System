import { html } from "../lib/lit-html.js";

export function showDetails(ctx) {
    ctx.renderView(detailsTemplate(ctx.quiz));
}

function detailsTemplate(data) {
    return html`
    <section id="details">
        <div class="pad-large alt-page">
            <article class="details">
                <h1>${data.title}</h1>
                <span class="quiz-topic">A quiz by <a href="#">${data.host.username}</a> on the topic of ${data.topic}</span>
                <div class="quiz-meta">
                    <span>${data.questionCount} Questions</span>
                    <span>|</span>
                    <span>Taken 0 times</span>
                </div>
                <p class="quiz-desc">${data.description}</p>
    
                <div>
                    <a class="cta action" href="#">Begin Quiz</a>
                </div>
    
            </article>
        </div>
    </section>`
}