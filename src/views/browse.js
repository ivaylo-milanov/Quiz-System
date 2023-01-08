import { html } from "../lib/lit-html.js";

export function showBrowser(ctx) {
    ctx.render(browserTemplate());
}

function browserTemplate() {
    return html`
    <section id="browse">
        <header class="pad-large">
            <form class="browse-filter">
                <input class="input" type="text" name="query">
                <select class="input" name="topic">
                    <option value="all">All Categories</option>
                    <option value="it">Languages</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Tools and Software</option>
                </select>
                <input class="input submit action" type="submit" value="Filter Quizes">
            </form>
            <h1>All quizes</h1>
        </header>
    
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
        </div>
    
        <div class="pad-large alt-page">
    
            <article class="preview layout">
                <div class="right-col">
                    <a class="action cta" href="#">View Quiz</a>
                </div>
                <div class="left-col">
                    <h3><a class="quiz-title-link" href="#">Extensible Markup Language</a></h3>
                    <span class="quiz-topic">Topic: Languages</span>
                    <div class="quiz-meta">
                        <span>15 questions</span>
                        <span>|</span>
                        <span>Taken 54 times</span>
                    </div>
                </div>
            </article>
    
            <article class="preview layout">
                <div class="right-col">
                    <a class="action cta" href="#">View Quiz</a>
                </div>
                <div class="left-col">
                    <h3><a class="quiz-title-link" href="#">RISC Architecture</a></h3>
                    <span class="quiz-topic">Topic: Hardware</span>
                    <div class="quiz-meta">
                        <span>10 questions</span>
                        <span>|</span>
                        <span>Taken 107 times</span>
                    </div>
                </div>
            </article>
    
            <article class="preview layout">
                <div class="right-col">
                    <a class="action cta" href="#">View Quiz</a>
                </div>
                <div class="left-col">
                    <h3><a class="quiz-title-link" href="#">Webpack</a></h3>
                    <span class="quiz-topic">Topic: Tools and Software</span>
                    <div class="quiz-meta">
                        <span>17 questions</span>
                        <span>|</span>
                        <span>Taken 189 times</span>
                    </div>
                </div>
            </article>
    
        </div>
    </section>`
}