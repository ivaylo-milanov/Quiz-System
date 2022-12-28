import { render } from "./lib.js";

const root = document.querySelector('main');

export function middleWare(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}