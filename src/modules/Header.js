import React from 'react';
import styled from 'styled-components';

//style
const Lheader = styled.div`
  text-align: center;
`;
const HeaderMain = styled.h3`
  color: blue;
`;


function Header(props) {
    return (
        <Lheader>
            <HeaderMain>{props.name}</HeaderMain>
        </Lheader>
    );
};

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className="l-header">
//                 <h3 className="header">{this.props.name}</h3>
//             </div>
//         );
//     };
// }

export default Header;
