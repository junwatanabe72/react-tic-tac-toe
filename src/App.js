import React, { Component } from 'react';
import Header from './modules/Header';
import Player from './modules/Player';
import Board from './modules/Board';
import Result from './modules/Result';
import Button from './modules/Button';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      squares: Array(9).fill(null),
      xIsNext: false,
      Count: 0,
    };
  };

  render() {
    return (
      <div className="App">
        <Header name="tic tac toe" />
        <Player xIsNext={this.state.xIsNext} />
        <Board />
        <Result />
        <Button />
      </div>
    );
  };
};

export default App;
