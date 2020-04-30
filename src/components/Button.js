import React from 'react';
import styled from 'styled-components';

const Lbutton = styled.div`
  text-align: center;
`;

const ButtonMain = styled.button`
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    background-color: white;
    border: 2px solid black;
    text-align: center;
    border-radius: 4px;
    padding: 1px 15px;
    cursor: pointer;
    &: hover{
        background-color: black;
        color: white;
    }
`;

function Button(props){
    return (
        <Lbutton>
            <ButtonMain onClick={props.handleClick} >
                restart
            </ButtonMain>
        </Lbutton>
    );
};

// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className="l-button">
//                 <a className="button" onClick={this.props.handleClick} >
//                     restart
//          </a>
//             </div>
//         );
//     };
// }

export default Button;
