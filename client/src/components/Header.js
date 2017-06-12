import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {

    render() {
        return (
            <AppBar
                title={"user: " + this.props.name}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.props.toggleDrawer}
            />
        );
    }
}