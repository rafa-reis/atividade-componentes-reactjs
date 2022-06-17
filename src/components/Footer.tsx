import * as React from 'react';
import styled from 'styled-components';

type HeaderContentProps = {
    ligth?: boolean;
};

const FooterBackground = styled.header<HeaderContentProps> `
    background-image: url('./assets/back-header.jpg');
    background-position: bottom center;
    color: ${({ ligth }) => (ligth ? "white" : "black")};
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface FooterTextProps {
    title: string;
    solid?: boolean
}


const Footer: React.FC<FooterTextProps> = ({title, solid}) => {
    return (
        <>
           <FooterBackground ligth={solid}> 
           <h1> {title} </h1> 
           </FooterBackground> 
        </>
    );
};

export default Footer;