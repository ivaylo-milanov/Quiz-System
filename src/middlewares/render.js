import { render } from "../lib/lit-html.js";

export function middleWare(main, nav) {
    return function(ctx, next) {
        ctx.renderView = renderView;
        ctx.renderNav = renderNav;
        next();
    }

    function renderView(content) {
        render(content, main);
    }

    function renderNav(content) {
        render(content, nav);
    }
}