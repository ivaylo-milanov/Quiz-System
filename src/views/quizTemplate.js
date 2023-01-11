import { html } from "../lib/lit-html.js";

export function quizCard(data) {
    return html`
    <article class="preview layout">
        <div class="right-col">
            <a class="action cta" href="/details/${data.objectId}">View Quiz</a>
        </div>
        <div class="left-col">
            <h3><a class="quiz-title-link" href="#">${data.title}</a></h3>
            <span class="quiz-topic">Topic: ${data.topic}</span>
            <div class="quiz-meta">
                <span>${data.questionCount} questions</span>
                <span>|</span>
                <span>Taken 0 times</span>
            </div>
        </div>
    </article>`
}

export function quizCardWithEditAndDel(data) {
    return html`
    <article class="preview layout">
        <div class="right-col">
            <a class="action cta" href="/details/${data.objectId}">View Quiz</a>
            <a class="action cta" href="#"><i class="fas fa-edit"></i></a>
            <a class="action cta" href="#"><i class="fas fa-trash-alt"></i></a>
        </div>
        <div class="left-col">
            <h3><a class="quiz-title-link" href="#">${data.title}</a></h3>
            <span class="quiz-topic">Topic: ${data.topic}</span>
            <div class="quiz-meta">
                <span>${data.questionCount} questions</span>
                <span>|</span>
                <span>Taken 0 times</span>
            </div>
        </div>
    </article>`
}

export function topicTemplate(topic) {
    return html`<option value=${topic}>${topic}</option>`
}

export function loaderTemplate() {
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