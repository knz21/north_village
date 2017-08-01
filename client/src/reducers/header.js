const header = (state = { users: [], drawerOpen: false, selectedUser: 0 }, action) => {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            console.log('reducer toggle');
            console.log(state);
            return Object.assign({}, state, { drawerOpen: !state.drawerOpen });
        case 'SELECT_USER':
            console.log('reducer select user');
            return Object.assign({}, state, { selectedUser: action.idx });
        default:
            return state
    }
};

export default header