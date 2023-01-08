import { get } from '../api/api.js';

const endpoint = {
    'allQuizzes': '/classes/Quiz'
}

export async function getQuizzes() {
    return get(endpoint.allQuizzes);
} 