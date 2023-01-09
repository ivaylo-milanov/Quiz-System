import { html } from "../lib/lit-html.js";
import { removeUserData } from "../utils.js";

export function navTemplate(hasUser) {
    return html`
    <a class="logotype" href="/"><i class="fas fa-question-circle"></i><i class="merge fas fa-check-circle"></i><span>Quiz
            Fever</span></a>
    <div class="navigation">
        <a class="nav-link" href="/browse">Browse</a>
        ${hasUser
            ? html`
        <div id="user-nav">
            <a class="nav-link" href="/create">Create</a>
            <a class="nav-link profile-link" href="/me"><i class="fas fa-user-circle"></i></a>
            <a id="logoutBtn" class="nav-link" href="/logout">Logout</a>
        </div>`
            : html`
        <div id="guest-nav">
            <a class="nav-link" href="/login">Sign in</a>
        </div>`}
    </div>`
}