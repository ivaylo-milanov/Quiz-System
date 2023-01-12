import { html } from "../lib/lit-html.js"

export const questionTemplate = (cancelBtn = null) => html`
<article class="editor-question">
    <div class="layout">
        <div class="question-control">
            <button class="input submit action"><i class="fas fa-check-double"></i>
                Save</button>
            ${cancelBtn}
        </div>
        <h3>Question 1</h3>
    </div>
    <form>
        <textarea class="input editor-input editor-text" name="text" placeholder="Enter question"></textarea>
        <div id="answers">
            <div class="editor-input">

                <label class="radio">
                    <input class="input" type="radio" name="question-1" value=1 />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-1" />
                <!-- <button class="input submit action"><i class="fas fa-trash-alt"></i></button> -->
            </div>
            <div class="editor-input">

                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="2" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-2" />
                <!-- <button class="input submit action"><i class="fas fa-trash-alt"></i></button> -->
            </div>
            <div class="editor-input">

                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="3" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-3" />
                <!-- <button class="input submit action"><i class="fas fa-trash-alt"></i></button> -->
            </div>
        </div>
        <!-- <div class="editor-input">
            <button class="input submit action">
                <i class="fas fa-plus-circle"></i>
                Add answer
            </button>
        </div> -->
    </form>
</article>`;

export const questionLoader = () => html`
<article class="editor-question">
    <div class="layout">
        <div class="question-control">
            <button disabled class="input submit action"><i class="fas fa-check-double"></i>
                Save</button>
            <button disabled class="input submit action"><i class="fas fa-times"></i>
                Cancel</button>
        </div>
        <h3>Question 1</h3>
    </div>
    <form>
        <textarea disabled class="input editor-input editor-text" name="text" placeholder="Enter question"></textarea>
        <div class="editor-input">
            <button disabled class="input submit action">
                <i class="fas fa-plus-circle"></i>
                Add answer
            </button>
        </div>
    </form>
    <div class="loading-overlay working"></div>
</article>`;

export const finishedQuestion = () => html`
<article class="editor-question">
    <div class="layout">
        <div class="question-control">
            <button class="input submit action"><i class="fas fa-edit"></i> Edit</button>
            <button class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
        </div>
        <h3>Question 2</h3>
    </div>
    <form>
        <p class="editor-input">This is the second question.</p>
        <div class="editor-input">
            <label class="radio">
                <input class="input" type="radio" name="question-2" value="0" disabled />
                <i class="fas fa-check-circle"></i>
            </label>
            <span>Answer 0</span>
        </div>
        <div class="editor-input">
            <label class="radio">
                <input class="input" type="radio" name="question-2" value="1" disabled />
                <i class="fas fa-check-circle"></i>
            </label>
            <span>Answer 1</span>
        </div>
        <div class="editor-input">
            <label class="radio">
                <input class="input" type="radio" name="question-2" value="2" disabled />
                <i class="fas fa-check-circle"></i>
            </label>
            <span>Answer 2</span>
        </div>
    </form>
</article>

<article class="editor-question">
    <div class="editor-input">
        <button class="input submit action">
            <i class="fas fa-plus-circle"></i>
            Add question
        </button>
    </div>
</article>`

const cancelButton = html`<button class="input submit action"><i class="fas fa-times"></i> Cancel</button>`