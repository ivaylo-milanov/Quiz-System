import { getFilteredQuizzes, getQuizzes } from "../api/data.js";
import { html } from "../lib/lit-html.js";
import { repeat } from "../lib/directives/repeat.js";
import { createSubmitHandler } from "../utils.js";

export async function showBrowser(ctx) {
    ctx.renderView(loaderTemplate());
    const { results: quizzes } = await getQuizzes();
    const topics = Array.from(new Set(quizzes.map(x => x.topic)));
    ctx.renderView(browserTemplate(quizzes, createSubmitHandler(onBrowse), topics));
}

function loaderTemplate() {
    return html`
    <div class="pad-large alt-page async">
        <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        </div>
    </div>`
}

function quizzesTemplate(quizzes) {
    return html`
    ${quizzes.length > 0 
        ? repeat(quizzes, x => x.objectId, quizCard)
        : noRecords()}`
}

function browserTemplate(quizzes, handler, topics) {
    return html`
    <section id="browse">
        <header class="pad-large">
            <form @submit=${handler} class="browse-filter">
                <input class="input" type="text" name="query">
                <select class="input" name="topic">
                    <option value="all">All Categories</option>
                    ${topics.map(topicTemplate)}
                </select>
                <input class="input submit action" type="submit" value="Filter Quizes">
            </form>
            <h1>All quizes</h1>
        </header>
    
        <div class="pad-large alt-page">
            ${quizzesTemplate(quizzes)}
        </div>
    </section>`
}

function quizCard(data) {
    return html`
    <article class="preview layout">
        <div class="right-col">
            <a class="action cta" href="#">View Quiz</a>
        </div>
        <div class="left-col">
            <h3><a class="quiz-title-link" href="#">${data.title}</a></h3>
            <span class="quiz-topic">Topic: ${data.topic}</span>
            <div class="quiz-meta">
                <span>${data.questionCount} questions</span>
                <span>|</span>
                <span>Taken 189 times</span>
            </div>
        </div>
    </article>`
}

function noRecords() {
    return html`<p>No Quizzes</p>`
}

function topicTemplate(topic) {
    const value = topic.split(' ')[0].toLowerCase();

    return html`<option value=${value}>${topic}</option>`
}

async function onBrowse(data) {
    console.log(data);
    debugger;
}