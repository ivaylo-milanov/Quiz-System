import { render } from "../lib/lit-html.js";
import { loaderTemplate } from "../views/quizTemplate.js";

export function middleWare(main, nav) {
    return function(ctx, next) {
        ctx.renderView = renderView;
        ctx.renderNav = renderNav;
        ctx.renderLoader = renderLoader;
        next();
    }

    function renderView(content) {
        render(content, main);
    }

    function renderNav(content) {
        render(content, nav);
    }

    function renderLoader() {
        render(loaderTemplate(), main)
    }
}