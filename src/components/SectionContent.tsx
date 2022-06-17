import React from "react";
import styled from "styled-components";

type SectionBack = {
    background?: boolean
    letter?: boolean,
}


const SectionStyled = styled.div<SectionBack>`
    background-color: ${({ background }) => (background ? "white" : "black")};
    color: ${({ letter }) => (letter ? "black" : "white")};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: justify;
    height: 500px;
    width: 600px;
    box-sizing: border-box;
    padding: 60px;
    /* background-color: aliceblue; */
   /*  border: solid 1px black; */

   h2 {
    margin: 0;
    padding: 0;
   }
`;

interface TextContent {
    title: string;
    paragraph: string;
    solid?: boolean,
    dark?: boolean
}

const SectionContent: React.FC<TextContent> = ({ title, paragraph, solid, dark}) => {
    return (
        <SectionStyled letter={solid} background={dark}>
        <h2> { title } </h2>
        <p> { paragraph }</p>
        </SectionStyled>
    );
};

export default SectionContent;