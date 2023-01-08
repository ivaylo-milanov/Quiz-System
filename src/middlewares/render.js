import { render } from "../lib/lit-html.js";

export function middleWare(main) {
    return function(ctx, next) {
        ctx.renderView = renderView;
        next();
    }

    function renderView(content) {
        render(content, main);
    }
}