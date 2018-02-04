import * as React from 'react';
import Reusable from './resuable';

const MdMail = require('react-icons/lib/md/mail');
const FaLinkedin = require('react-icons/lib/fa/linkedin');
const FaGithub = require('react-icons/lib/fa/github');
const {Row, Col} = require('react-bootstrap');
const BlackContainer = Reusable.BlackContainer;
const ButtonWrapper = Reusable.ButtonWrapper;
const IconStyles = Reusable.IconStyles;
const SectionHeader = Reusable.SectionHeader;
const ItemText = Reusable.ItemText;

class Footer extends React.Component {

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
            <BlackContainer>
                <Row>
                    <Col xs={3} sm={3} md={3}/>
                    <Col xs={6} sm={6} md={6}>
                        <SectionHeader>Contact</SectionHeader>
                        <ItemText><b>Email</b>: jordanomac@gmail.com | <b>Phone</b>: (406)-282-1020</ItemText>
                        <div>
                            <ButtonWrapper onClick={() => this.onContactButtonClick('email')}>
                                <MdMail style={IconStyles}/></ButtonWrapper>
                            <ButtonWrapper onClick={() => this.onContactButtonClick('linkedin')}>
                                <FaLinkedin style={IconStyles}/></ButtonWrapper>
                            <ButtonWrapper onClick={() => this.onContactButtonClick('git')}>
                                <FaGithub style={IconStyles}/></ButtonWrapper>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3}/>
                </Row>
            </BlackContainer>
        );
    }
}

export default Footer;