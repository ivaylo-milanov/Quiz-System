export function createSubmitHandler(callback, ctx) {
    return (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if (Object.values(data).some(x => x === '')) {
            throw new Error('Fill the gaps');
        }

        callback(data, ctx);
        event.target.reset();
    }
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('user'));
}

export function setUserData(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export function removeUserData() {
    sessionStorage.removeItem('user');
}