import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer';

export default class Users extends Component {

    render() {
        return (
            <Drawer
                docked={false}
                open={this.props.open}
                onRequestChange={this.props.toggle}>
                {this.props.children}
            </Drawer>
        );
    }
}