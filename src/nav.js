import { render } from "./lib.js";

const root = document.getElementById('content');

export function middleWare(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}