export const getUsersError = (state = false, action) => {
    switch (action.type) {
        case 'GET_USERS_ERROR':
            return action.hasError;
        default:
            return state;
    }
};

export const loadUsers = (state = false, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return action.isLoading;
        default:
            return state;
    }
};

export const users = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS_SUCCESS':
            return action.users;
        default:
            return state;
    }
};