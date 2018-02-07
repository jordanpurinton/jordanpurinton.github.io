import * as React from 'react';
import styled from 'styled-components';
import Reusable from './resuable';
import MdMail from 'react-icons/lib/md/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import logo from './assets/jordan-purinton-pic.png';

const BlackContainer = Reusable.BlackContainer;
const ButtonWrapper = Reusable.ButtonWrapper;
const IconStyles = Reusable.IconStyles;

const Logo = styled.img`
    margin: 0 16px 0 16px;
    height: 150px;`;

const NameLabel = styled.h1`
    font-size: 4em;
    font-weight: bold;
    margin: 0`;

const NameLabelSubhead = styled.h5`
    margin: 0;
    font-weight: 100`;

const IconP = styled.div`
    margin: 16px 0 0 0`;

const Center = {
    textAlign: 'center'
};

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
                <Logo src={logo}/>
                <NameLabel>Jordan Purinton</NameLabel>
                <NameLabelSubhead>Developer. Likes when things work.</NameLabelSubhead>
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
