import { getById, getQuizzes } from "../api/data.js";

export function getQuizById() {
    return async function(ctx, next) {
        const id = ctx.params.id;
        const quiz = await getById(id);
        ctx.quiz = quiz;
        next();
    }
}

export function preparingTopicsAndQuizzes() {
    return async function(ctx, next) {
        const {results: quizzes} = await getQuizzes();
        const topics = Array.from(new Set(quizzes.map(x => x.topic)));

        ctx.topics = topics;
        ctx.quizzes = quizzes;
        next();
    }
}

export function loader() {
    return function(ctx, next) {
        ctx.renderLoader();
        next();
    }
}