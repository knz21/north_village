import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Header'
import Users from './Users'
import User from './User'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
injectTapEventPlugin();

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            drawerOpen: false,
            users: [],
            selectedUser: 0
        };


        axios.get(`api/client/v1/users`)
            .then(res => {
                this.setState({users: res.data.result.users})
            });
    }

    handleToggleDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }

    render() {
        const users = this.state.users.map((user, idx) => {
            return <User key={idx} onSelect={this.handleToggleDrawer} user={user}/>
        });

        const currentUserName = this.state.users.length > 0 ? this.state.users[0].name : 'not selected'

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header name={currentUserName} toggleDrawer={this.handleToggleDrawer}/>
                    <Users open={this.state.drawerOpen} toggle={this.handleToggleDrawer}>
                        {users}
                    </Users>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App