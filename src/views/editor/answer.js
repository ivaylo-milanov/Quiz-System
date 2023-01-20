import { html } from "../../lib/lit-html.js";

export const answerTemplate = (data) => html`
<div class="editor-input">
    <label class="radio">
        <input class="input" type="radio" name="question-2" value="0" disabled />
        <i class="fas fa-check-circle"></i>
    </label>
    <span>${data}</span>
</div>`