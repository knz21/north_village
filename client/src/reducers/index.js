import {combineReducers} from 'redux'
import header from './header'
import {getUsersError, loadUsers, users} from './users'

const reducers = combineReducers({
    header,
    getUsersError,
    loadUsers,
    users
});

export default reducers
