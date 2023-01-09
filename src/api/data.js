import { get } from '../api/api.js';

const endpoint = {
    'allQuizzes': '/classes/Quizzes',
    'filteredQuizzes': () => `/classes/Quizzes?where=${encodeURIComponent({})}`
}

export async function getQuizzes() {
    return get(endpoint.allQuizzes);
} 

export async function getFilteredQuizzes() {
    return get(endpoint.filteredQuizzes());
}