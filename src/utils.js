export function createSubmitHandler(callback, ctx) {
    return (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if (Object.values(data).some(x => x === '')) {
            throw new Error('Fill the gaps');
        }

        callback(data, ctx);
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

export function createPointer(className, objectId) {
    return {__type: "Pointer", className, objectId}
}

export function addOwner(data, objectId) {
    const newData = Object.assign({}, data);
    newData.host = createPointer('_User', objectId);

    return newData;
}
