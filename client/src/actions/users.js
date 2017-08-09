import axios from 'axios'

export const getUsersError = status => ({
    type: 'GET_USERS_ERROR',
    hasError: status
});

export const loadUsers = status => ({
    type: 'LOAD_USERS',
    isLoading: status
});

export const fetchUsersSuccess = users => ({
    type: 'FETCH_USERS_SUCCESS',
    users
});

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(loadUsers(true));
        axios.get(`api/client/v1/users`, {
            params: {
                token: localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log('response');
                console.log(response);
                if (response.data.status !== 1) {
                    throw Error(response.error_message);
                }
                dispatch(loadUsers(false));
                return response.data;
            })
            .then((data) => dispatch(fetchUsersSuccess(data.result.users)))
            .catch(() => dispatch(getUsersError(true)));
    }
};