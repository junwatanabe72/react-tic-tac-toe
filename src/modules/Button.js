import React, { Component } from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.sample = this.sample.bind(this)
    }

    sample() {
        alert("sample")
    }

    render() {

        return (
            <div className="l-button">
                <a className="button" onClick={this.sample} >
                    restart
         </a>
            </div>
        );
    };
}

export default Button;
