import React, { Component } from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const border = (
            <table>
                <tr>
                    <td className="cell"></td>
                    <td className="cell"></td>
                    <td className="cell"></td>
                </tr>
                <tr>
                    <td className="cell"></td>
                    <td className="cell"></td>
                    <td className="cell"></td>
                </tr>
                <tr>
                    <td className="cell"></td>
                    <td className="cell"></td>
                    <td className="cell"></td>
                </tr>
            </table>
        );
        return (
            <div className="blank">
                <div className="l-board">
                    {border}
                </div>
            </div>
        );
    };
}


export default Board;