import { getFilteredQuizzes, getQuizzes } from "../api/data.js";
import { html } from "../lib/lit-html.js";
import { repeat } from "../lib/directives/repeat.js";
import { quizCard, topicTemplate } from "../views/quizTemplate.js";

let allQuizzes;

export async function showBrowser(ctx) {
    allQuizzes = ctx.quizzes;
    ctx.renderView(browserTemplate(browseSubmitHandler(onBrowse, ctx), ctx.topics));
}

function browserTemplate(handler, topics, quizzes = allQuizzes) {
    return html`
    <section id="browse">
        <header class="pad-large">
            <form @submit=${handler} class="browse-filter">
                <input class="input" type="text" name="query">
                <select class="input" name="topic">
                    <option value="all">All Categories</option>
                    ${topics.map(topicTemplate)}
                </select>
                <input class="input submit action" type="submit" value="Filter Quizzes">
            </form>
            <h1>All quizzes</h1>
        </header>
    
        <div class="pad-large alt-page">
            ${quizzesTemplate(quizzes)}
        </div>
    </section>`
}

function quizzesTemplate(quizzes) {
    return html`
    ${quizzes.length > 0 
        ? repeat(quizzes, x => x.objectId, quizCard)
        : noRecords()}`
}

function noRecords() {
    return html`<p>No Quizzes</p>`
}

async function onBrowse({query, topic}, ctx) {
    let quizzes;

    ctx.renderLoader();

    if (topic === 'all') {
        quizzes = await getQuizzes();
    } else {
        quizzes = await getFilteredQuizzes(topic);
    }
    
    quizzes = quizzes.results
        .filter(x => x.title.toLowerCase()
        .includes(query.toLowerCase()))

    ctx.renderView(browserTemplate(browseSubmitHandler(onBrowse, ctx), ctx.topics, quizzes));
}

export function browseSubmitHandler(callback, ctx) {
    return (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        callback(data, ctx);
    }
}

