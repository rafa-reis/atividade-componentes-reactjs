import * as React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

type HeaderContentProps = {
    ligth?: boolean;
};

const FooterBackground = styled.header<HeaderContentProps> `
    background-color: aliceblue;
    color: #1e8beb;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 80px;
    
    .align-footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }


    .list {
        display: flex;
        gap: 35px;
        margin: 0;
        padding: 5px 20px;
    }

    .copy {
        color: darkgray;
    }

    .footer-icons {
        display: flex;
        gap: 30px;
        font-size: 1.5em;
    }
    
    a{
        text-decoration: none;
        color: #1e8beb;
    }
    
`;

interface FooterMidiaProps {
    solid?: boolean
}


const MidiaFooter: React.FC<FooterMidiaProps> = ({solid}) => {
    return (
        <>
           <FooterBackground ligth={solid}> 
                
                <div className='align-footer'>
                    <ul className='list'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <small className='copy'>&copy;Your Website 2020. AllRights Reserved.</small>
                </div>

                <div className='footer-icons'>
                    <i> < FaFacebook /> </i>
                    <i> < FaTwitterSquare /> </i>
                    <i> < FaInstagram /> </i>
                </div>
                
           </FooterBackground> 
        </>
    );
};

export default MidiaFooter;