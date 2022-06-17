// @flow 
import * as React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
    text-align: center;
    padding: 20px;

    .header-icons {
        font-size: 3.0em;
        color: #1e8beb;
    }
`;

interface CardProps {
    title: string;
    description: string;
    element: any;
};

const NavigationCard: React.FC<CardProps> = ({ title, description, element}) => {
    return (
            <NavStyled>
            <h1 className='header-icons'>  {element}  </h1>
            <h2> {title} </h2>
            <p> {description} </p>
            </NavStyled>
    );
};

export default NavigationCard;