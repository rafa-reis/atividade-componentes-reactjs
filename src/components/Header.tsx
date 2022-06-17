// @flow 
import * as React from 'react';
import styled from 'styled-components';

type HeaderContentProps = {
    ligth?: boolean;
};

const HeaderBackground = styled.header<HeaderContentProps> `
    height: 250px;
    background-image: url('./assets/back-header.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center bottom 150px;
    color: ${({ ligth }) => (ligth ? "white" : "black")};
    display: flex;
    justify-content: center;
    align-items: center;

`;

interface HeaderTextProps {
    title: string;
    solid?: boolean
}


const Header: React.FC<HeaderTextProps> = ({title, solid}) => {
    return (
        <>
           <HeaderBackground ligth={solid}> 
           <h1> {title} </h1> 
           </HeaderBackground> 
        </>
    );
};

export default Header;