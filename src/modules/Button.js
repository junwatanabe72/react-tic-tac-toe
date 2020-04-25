import React, { Component } from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="l-button">
                <a className="button" onClick={this.props.handleClick} >
                    restart
         </a>
            </div>
        );
    };
}

export default Button;
