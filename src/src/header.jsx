import React from 'react';
import './index.css';
import logo from './assets/jordan-purinton-pic.png';
import Typist from 'react-typist';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';
import Reusable from './resuable';
import MdMail from 'react-icons/lib/md/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
const ButtonWrapper = Reusable.ButtonWrapper;
const IconStyles = Reusable.IconStyles;
const BlackContainer = Reusable.BlackContainer;

const Logo = {
    margin: '0 16px 0 16px',
    height: '200px'
};

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 600px;
  background-size: contain;
  background-position: center center;
`;

const NameLabel = styled.h1`
    font-size: 2em;
    font-weight: bolder;
    margin: 16px 0 0 0;`;

const Center = {
    textAlign: 'center'
};

const IconP = styled.div`
    margin: 16px 0 0 0`;

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
            <BlackContainer style={Center}>
                <StyledProgressiveImage
                    src={logo}
                    placeholder={logo}
                    style={Logo}
                    transition="all 1s linear"
                />
                <NameLabel>
                    <Typist avgTypingDelay={90}>
                        Hi, I'm Jordan<br/>
                        <Typist.Delay ms={500}/>
                        I like to build things
                    </Typist>
                </NameLabel>
                <IconP>
                    <ButtonWrapper onClick={() => this.onContactButtonClick('email')}>
                        <MdMail style={IconStyles}/></ButtonWrapper>
                    <ButtonWrapper onClick={() => this.onContactButtonClick('linkedin')}>
                        <FaLinkedin style={IconStyles}/></ButtonWrapper>
                    <ButtonWrapper onClick={() => this.onContactButtonClick('git')}>
                        <FaGithub style={IconStyles}/></ButtonWrapper>
                </IconP>
            </BlackContainer>
        );
    }
}

export default Header;
