import React, { Component } from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const status = "processing"

        return (
            <div className="l-result">
                <div className="result">
                    {status}
                </div>
            </div>
        );
    };
}


export default Result;