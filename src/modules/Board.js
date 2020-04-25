import React, { Component } from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cell =(i)=> <td className="cell" onClick={() => this.props.handleClick(i)}>{this.props.squares[i]}</td>
        const border = (
            <table>
                <tbody>
                    <tr>
                        {cell(0)}
                        {cell(1)}
                        {cell(2)}
                    </tr>
                    <tr>
                        {cell(3)}
                        {cell(4)}
                        {cell(5)}
                    </tr>
                    <tr>
                        {cell(6)}
                        {cell(7)}
                        {cell(8)}
                    </tr>
                </tbody>
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