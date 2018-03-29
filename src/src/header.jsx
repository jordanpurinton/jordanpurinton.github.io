import React from 'react';
import './index.css';
import Fade from 'react-reveal/Fade';
import me from './assets/jordan-purinton-pic.png';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import styled from 'styled-components';
import Reusable from './reusable';
import MdMail from 'react-icons/lib/md/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';

const ButtonWrapper = Reusable.ButtonWrapper;
const IconStyles = Reusable.IconStyles;
const WhiteContainer = Reusable.WhiteContainer;

const Logo = styled.img`
    margin: 0 16px 0 16px; 
    height: 125px;`;

const NameLabel = styled.h1`
    font-weight: bolder;
    font-size: 64px;
    margin: 8px 0 8px 0;`;

const NameLabelSubhead = styled.h6`
    font-weight: 400;
    margin: 0;`;

const Center = {
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '5%'
};

const IconDiv = styled.div`
    margin: 32px 0 0 0`;

class Header extends React.Component {

    onContactButtonClick(link) {
        if (link === 'email') {
            window.open('mailto:jordanomac@gmail.com?Subject=Response%20From%20Portfolio%20Site');
        } else if (link === 'linkedin') {
            window.open('https://www.linkedin.com/in/jordanpurinton');
        } else if (link === 'git') {
            window.open('https://www.github.com/jordanpurinton');
        }
    }

    render() {
        return (
            <WhiteContainer style={Center}>
                <Fade>
                    <div>
                        <Logo src={me}/>
                    </div>
                </Fade>
                <NameLabel>
                    Hi, I'm Jordan.<br/>
                </NameLabel>
                <NameLabelSubhead>
                    <TypistLoop interval={2500}>
                        {[
                            'I build websites and mobile apps.',
                            'I design user interfaces.',
                            'I like solving problems.',
                            'I make software easier to use.'
                        ].map(text => <Typist key={text} startDelay={200}>{text}</Typist>)}
                    </TypistLoop>
                </NameLabelSubhead>
                <IconDiv>
                    <ButtonWrapper onClick={() => this.onContactButtonClick('email')}>
                        <MdMail style={IconStyles}/></ButtonWrapper>
                    <ButtonWrapper onClick={() => this.onContactButtonClick('linkedin')}>
                        <FaLinkedin style={IconStyles}/></ButtonWrapper>
                    <ButtonWrapper onClick={() => this.onContactButtonClick('git')}>
                        <FaGithub style={IconStyles}/></ButtonWrapper>
                </IconDiv>
            </WhiteContainer>
        );
    }
}

export default Header;
