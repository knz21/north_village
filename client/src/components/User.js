import React, {Component} from 'react'
import MenuItem from 'material-ui/MenuItem';

export default class Users extends Component {

    render() {
        return (
            <MenuItem onTouchTap={this.props.onSelect}>{this.props.user.name}</MenuItem>
        );
    }
}