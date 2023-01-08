import { html, render } from "./lib/lit-html.js";
import { getUserData, removeUserData } from "./utils.js";

const root = document.querySelector('main');

export function middleWare(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

function navTemplate(ctx) {
    const user = getUserData();

    return html`
    <a class="logotype" href="/"><i class="fas fa-question-circle"></i><i class="merge fas fa-check-circle"></i><span>Quiz
            Fever</span></a>
    <div class="navigation">
        <a class="nav-link" href="/browse">Browse</a>
        ${user 
        ? html`
        <div id="user-nav">
            <a class="nav-link" href="/create">Create</a>
            <a class="nav-link profile-link" href="/me"><i class="fas fa-user-circle"></i></a>
            <a @click=${onLogout.bind(null, ctx)} id="logoutBtn" class="nav-link" href="javascript:void(0)">Logout</a>
        </div>`
        : html`
        <div id="guest-nav">
            <a class="nav-link" href="/login">Sign in</a>
        </div>`}
    </div>`
}

export function navUpdate(ctx, next) {
    render(navTemplate(ctx), document.querySelector('nav'));
    next();
}

async function onLogout(ctx) {
    removeUserData();
    ctx.page.redirect('/');
}