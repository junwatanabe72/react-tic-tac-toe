import React, { Component } from 'react';

//components
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import Result from './components/Result';
import Button from './components/Button';

//style
import styled from 'styled-components';


//定数
const activePlayer = {
  maru: '○',
  batsu: '×'
}

const initalState ={
    squares: Array(9).fill(null),//盤面の状況
    xIsNext: true, //trueの場合は○,falseは×
    count: 0, //ターン数。引き分け判定のため
    exceed: true //ゲームの終了判定。falseでゲーム終了。
}

//style
const Main = styled.div`
  width: 100%;
  max-width: 350px;
  height: 250px;
  margin: 200px auto;
`;


//comppnent
class App extends React.Component {
  constructor(props) {
    const { squares, xIsNext, count, exceed } = initalState
    super(props);
    this.state={
      squares, 
      xIsNext, 
      count, 
      exceed 
    };
    //クリックしたら、セルに○、×を入れる。=>stateを更新する。=>勝敗判定をする。=>終了判定をする。
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(i){
    const squares = this.state.squares.slice();
    const xIsNext = this.state.xIsNext
    const exceed = this.state.exceed
    const count = this.state.count

    //プレー続行判定、同じ場所か判定
    if (!exceed || squares[i]) {
      return
    }

    //プレイヤー判定し、squares[i]に入れる。
    this.checkedPlayer(squares,xIsNext,i)

    //state変更
    this.setState({
      squares: squares,
      xIsNext: !xIsNext,
      count: count+1
    });
    
    // 勝敗判定. 'o'or'x'かnull
    const winner =
    this.checkedWinner(squares)

    //nullでなければ勝負終了。
    if (winner) {
      this.setState({
        exceed: false
      });
    }
  }

  checkedPlayer(s,x,i){
    return s[i] = (x === true) ? activePlayer.maru : activePlayer.batsu
  }


  checkedWinner(s) {
    const lines =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i =0; i<lines.length; i++){
      const [a,b,c]=lines[i];
      if (s[a] && s[a] ===s[b]&&s[a]===s[c]){
        return s[a]
      }
    }
    return null
  }

  
  handleResetClick = () => {
    const { squares, xIsNext,count, exceed}=initalState
      this.setState({
        squares,
        xIsNext,
        count,
        exceed
    });
  }

  render() {
    return (
      <Main>
        <Header name="Tic Tac Toe" />
        <Player xIsNext={this.state.xIsNext} />
        <Board squares={this.state.squares} xIsNext={this.state.xIsNext} count={this.state.count} handleClick={this.handleClick}/>
        <Result exceed={this.state.exceed} xIsNext={this.state.xIsNext} count={this.state.count}/>
        <Button handleClick={this.handleResetClick} />
      </Main>
    );
  };
};

export default App;



