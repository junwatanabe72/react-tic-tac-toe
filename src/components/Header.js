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

export default Header;
