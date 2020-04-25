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
      xIsNext: true,
      count: 0,
      exceed: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  };

  handleClick(i){
    const squares = this.state.squares.slice();
    if (this.state.xIsNext){
      squares[i] = '○';
    }else{
      squares[i] = '×';
    }
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      count: this.state.count+1
    });
    console.log(this.state.count)
    console.log(squares)
    // 勝敗判定の関数入れる
  }

  handleResetClick() {
    const squares = this.state.squares.slice();
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      count: 0,
      exceed: true
    });
    // 勝敗判定の関数入れる
  }


  render() {
    return (
      <div className="App">
        <Header name="tic tac toe" />
        <Player xIsNext={this.state.xIsNext} />
        <button onClick={()=>this.handleClick()}>sample</button>
        <Board squares={this.state.squares} xIsNext={this.state.xIsNext} count={this.state.count} handleClick={this.handleClick}/>
        <Result />
        <Button handleClick={this.handleResetClick} />
      </div>
    );
  };
};

export default App;
