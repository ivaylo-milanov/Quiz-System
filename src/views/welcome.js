import { getRecent } from "../api/data.js";
import { html } from "../lib/lit-html.js";
import { quizCard } from "../views/quizTemplate.js";

export async function showWelcome(ctx) {
    const { results: quizzes } = await getRecent();
    ctx.renderView(welcomeTemplate(quizzes, ctx));
}

function welcomeTemplate(quizzes, ctx) {
    return html`
    <section id="welcome">
        ${ctx.user
        ? html`
        <div class="pad-large alt-page">
            <h2>Our most recent quizzes:</h2>
            ${quizzes.map(quizCard)}
            <div>
                <a class="action cta" href="/browse">Browse all quizes</a>
            </div>
        </div>`
        : html`
        <div class="hero layout">
            <div class="splash right-col"><i class="fas fa-clipboard-list"></i></div>
            <div class="glass welcome">
                <h1>Welcome to Quiz Fever!</h1>
                <p>Home to ${ctx.quizzes.length} quizes in ${ctx.topics.length} topics. <a href="/browse">Browse all
                        quizes</a>.</p>
                <a class="action cta" href="/login">Sign in to create a quiz</a>
            </div>
        </div>`}
    </section>`;
}