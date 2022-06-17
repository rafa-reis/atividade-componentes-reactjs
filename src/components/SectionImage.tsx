import React from "react";
import styled from "styled-components";


const SectionStyled = styled.div`
    display: flex;
    height: 500px;
    width: 600px;
    overflow: hidden;
   /*  border: solid 1px black; */
`;

interface PhotoProps {
    photo: any;
}


const SectionImage: React.FC<PhotoProps> = ({photo}) => {
    return (
        <SectionStyled>   
        <img src={photo}/>
        </SectionStyled>
    );
};

export default SectionImage;