import { getAuthorQuizzes } from "../api/data.js";
import { html } from "../lib/lit-html.js";
import { quizCardWithEditAndDel } from "./quizTemplate.js";

export async function showProfile(ctx) {
    const user = ctx.user;
    const {results: quizzes} = await getAuthorQuizzes(user.objectId);
    ctx.renderView(profileTemplate(user, quizzes));
}

function profileTemplate(user, quizzes) {
    return html`
    <section id="profile">
        <header class="pad-large">
            <h1>Profile Page</h1>
        </header>
    
        <div class="hero pad-large">
            <article class="glass pad-large profile">
                <h2>Profile Details</h2>
                <p>
                    <span class="profile-info">Username:</span>
                    ${user.username}
                </p>
                <p>
                    <span class="profile-info">Email:</span>
                    ${user.email}
                </p>
                <h2>Your Quiz Results</h2>
                <table class="quiz-results">
                    <tbody>
                        <tr class="results-row">
                            <td class="cell-1">23. March 2021</td>
                            <td class="cell-2"><a href="#">RISC Architecture</a></td>
                            <td class="cell-3 s-correct">85%</td>
                            <td class="cell-4 s-correct">12/15 correct answers</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </div>
    
        <header class="pad-large">
            <h2>Quizes created by you</h2>
        </header>
    
        <div class="pad-large alt-page">
            ${quizzes.map(quizCardWithEditAndDel)}
        </div>
    
    </section>`
}
