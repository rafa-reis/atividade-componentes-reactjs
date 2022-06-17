import * as React from 'react';
import styled from 'styled-components'


type NavStyled = {
    usebackground?: boolean;
}
   
const Wrapper = styled.section<NavStyled>`
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ usebackground }) => (usebackground ? 'black' : 'white')}
`


export default Wrapper