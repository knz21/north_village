import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {toggleDrawer, selectUser} from '../actions'
import {fetchUsers} from '../actions/users'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Header'
import Users from './Users'
import User from './User'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LinearProgress from 'material-ui/LinearProgress';
injectTapEventPlugin();

class App extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        console.log('props');
        console.log(this.props);
        const users = this.props.users.map((user, idx) => {
            return <User key={idx} onSelect={this.props.selectUser.bind(this, idx)} user={user}/>
        });

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header name={this.selectedUserName()} toggleDrawer={this.props.toggleDrawer}/>
                    <Users open={this.props.drawerOpen} toggle={this.props.toggleDrawer}>
                        {users}
                    </Users>
                    {(this.props.isLoading) ? <LinearProgress/> : null}
                </div>
            </MuiThemeProvider>
        )
    }

    selectedUserName = () => {
        if (this.props.users.length > 0 && this.props.users.length > this.props.selectedUser) {
            return this.props.users[this.props.selectedUser].name
        }
        return ''
    }
}

App.propTypes = {
    users: PropTypes.array.isRequired,
    selectedUser: PropTypes.number.isRequired,
    drawerOpen: PropTypes.bool.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    users: state.users,
    selectedUser: state.header.selectedUser,
    drawerOpen: state.header.drawerOpen,
    hasError: state.getUsersError,
    isLoading: state.loadUsers
});

const mapDispatchToProps = (dispatch) => ({
    toggleDrawer: () => dispatch(toggleDrawer()),
    selectUser: (idx) => {
        dispatch(selectUser(idx));
        dispatch(toggleDrawer())
    },
    fetchUsers: (url) => dispatch(fetchUsers(url))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)