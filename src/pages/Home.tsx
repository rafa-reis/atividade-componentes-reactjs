import * as React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SectionContent from '../components/SectionContent';
import SectionImage from '../components/SectionImage';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import MidiaFooter from '../components/MidiaFooter';

const Home: React.FC = () => {
    
    const titleHeader = `Minha primeira página com React.`
    const paragraph = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eveniet harum recusandae quis nesciunt eligendi illum aperiam. Nulla sunt voluptas saepe veniam, officia voluptatibus sint nemo voluptatem similique in temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eveniet harum recusandae quis nesciunt eligendi illum aperiam. Nulla sunt voluptas saepe veniam, officia voluptatibus sint nemo voluptatem similique in temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eveniet harum recusandae quis nesciunt eligendi illum aperiam. Nulla sunt voluptas saepe veniam, officia voluptatibus sint nemo voluptatem similique in temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eveniet harum recusandae quis nesciunt eligendi illum aperiam. Nulla sunt voluptas saepe veniam, officia voluptatibus sint nemo voluptatem similique in temporibus?`
   

    return (
        <>
            <Header title={titleHeader} solid={true} />
            <Navigation/>
            <Wrapper usebackground={false}>
                <SectionContent title='Lorem Ipsum' paragraph= {paragraph} solid={true} dark={true}/>
                <SectionImage photo={'./assets/estadio.jpg'}/>
            </Wrapper>
            <Wrapper usebackground={false}>
                <SectionImage photo={'./assets/campo.jpg'}/>
                <SectionContent title='Lorem Ipsum' paragraph= {paragraph} solid={true} dark={true}/>
            </Wrapper>
            <Wrapper usebackground={false}>
                <SectionContent title='Lorem Ipsum' paragraph= {paragraph} solid={true} dark={true}/>
                <SectionImage photo={'./assets/futebol-feminino.jpg'}/>
            </Wrapper>
            <Footer title='Contato' solid={true} />
            <MidiaFooter />
        </>
    );
};


export default Home;