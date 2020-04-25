import React, { Component } from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="l-header">
                <h3 className="header">{this.props.name}</h3>
            </div>
        );
    };
}


export default Header;
