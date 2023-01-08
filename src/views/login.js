import { login } from "../api/user.js";
import { html } from "../lib/lit-html.js";
import { createSubmitHandler } from "../utils.js";

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin, ctx)));
}

async function onLogin({email, password}, ctx) {
    await login(email, password);
    ctx.page.redirect('/');
}

function loginTemplate(handler) {
    return html`
    <section id="login">
        <div class="pad-large">
            <div class="glass narrow">
                <header class="tab layout">
                    <h1 class="tab-item active">Login</h1>
                    <a class="tab-item" href="/register">Register</a>
                </header>
                <form @submit=${handler} class="pad-med centered">
                    <label class="block centered">Email: <input class="auth-input input" type="text" name="email" /></label>
                    <label class="block centered">Password: <input class="auth-input input" type="password"
                            name="password" /></label>
                    <input class="block action cta" type="submit" value="Sign In" />
                </form>
                <footer class="tab-footer">
                    Don't have an account? <a class="invert" href="/register">Create one here</a>.
                </footer>
            </div>
        </div>
    </section>`
}