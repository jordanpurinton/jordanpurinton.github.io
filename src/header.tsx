import * as React from 'react';
import styled from 'styled-components';
import Reusable from './resuable';

const MdMail = require('react-icons/lib/md/mail');
const FaLinkedin = require('react-icons/lib/fa/linkedin');
const FaGithub = require('react-icons/lib/fa/github');
const logo = require('./assets/jordan-purinton-pic.png');
const ButtonWrapper = Reusable.ButtonWrapper;
const IconStyles = Reusable.IconStyles;

const Container = styled.div`
    background-color: black;
    color: #1EC503;
    padding: 20px
    height: inherit;
    text-align: center;`;

const Logo = styled.img`
    margin: 20px 20px 0 20px;
    height: 150px;`;

const NameLabel = styled.h1`
    font-size: 3em;
    font-weight: bold;
    margin: 0`;

const NameLabelSubhead = styled.h4`
    margin: 0;
    font-weight: 100`;

const IconP = styled.div`
    padding: 20px 0 20px 0`;

class Header extends React.Component {

    onContactButtonClick(link: string) {
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
            <Container>
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
            </Container>
        );
    }
}

export default Header;
