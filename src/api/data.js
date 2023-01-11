import { get, post } from '../api/api.js';
import { addOwner, createPointer } from '../utils.js';

const endpoint = {
    'allQuizzes': '/classes/Quizzes',
    'filteredQuizzes': (topic) => `/classes/Quizzes?where=${encodeURIComponent(JSON.stringify({topic: topic}))}`,
    'byId': (id) => `/classes/Quizzes/${id}?include=host`,
    'recent': `/classes/Quizzes?order=-createdAt&limit=3`,
    'myQuizzes': (userId) => `/classes/Quizzes?where=${encodeURIComponent(JSON.stringify({host: createPointer('_User', userId)}))}`
}

export async function getQuizzes() {
    return get(endpoint.allQuizzes);
} 

export async function getFilteredQuizzes(topic) {
    return get(endpoint.filteredQuizzes(topic));
}

export async function getTopics() {
    return get(endpoint.topics);
}

export async function getById(id) {
    return get(endpoint.byId(id));
}

export async function createQuiz(data, userId) {
    return post(endpoint.allQuizzes, addOwner(data, userId));
}

export async function getRecent() {
    return get(endpoint.recent);
}

export async function getAuthorQuizzes(userId) {
    return get(endpoint.myQuizzes(userId));
}