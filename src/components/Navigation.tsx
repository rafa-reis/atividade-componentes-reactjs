// @flow 
import * as React from 'react';
import styled from 'styled-components';
import NavigationCard from './NavigationCard';
import { FaDesktop, FaRegCheckCircle, FaBuffer } from 'react-icons/fa';

type NavBack = {
    background?: boolean;
    letter?: boolean
}

const NavigationStyled = styled.nav<NavBack>`
    background-color: ${({ background }) => (background ? "white" : "black")};
    color: ${({ letter }) => ( letter ? "black" : "white")};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Navigation: React.FC = () => {

    const titleDesktop = `Vamos aprender, como utilizar um framework.`
    const titleComponents = `Utilizamos o Styled Components.`
    const titleCheck = `Estamos no caminho.`
    const iconeFace =  < FaDesktop /> 
    const iconeCamadas =  < FaBuffer /> 
    const iconeCheck =  < FaRegCheckCircle /> 

    return (
        <>
            <NavigationStyled background={true} letter={true}>
                <NavigationCard title='Somente para desktop' description={titleDesktop} element ={iconeFace}/> 
                <NavigationCard title='Criado com componentes' description={titleComponents} element = {iconeCamadas}/>
                <NavigationCard title='Fácil aproveitamento' description={titleCheck}  element = {iconeCheck}/> 
            </NavigationStyled>

        </>

    );
};



export default Navigation;