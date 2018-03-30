import React from 'react';
import Reusable from './reusable';
import MdMail from 'react-icons/lib/md/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const WhiteContainer = Reusable.WhiteContainer;
const ContainerDivider = Reusable.ContainerDivider;
const ButtonWrapperBottom = Reusable.ButtonWrapperBottom;
const IconStyles = Reusable.IconStyles;
const emailIcon = Reusable.EmailIcon;
const linkedinIcon = Reusable.LinkedinIcon;
const ghIcon = Reusable.GhIcon;
const SectionHeader = Reusable.SectionHeader;
const ItemText = Reusable.ItemText;

class Footer extends React.Component {

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
            <WhiteContainer>
                <ContainerDivider />
                <Fade>
                    <Row>
                        <Col xs={4} sm={4} md={4} />
                        <Col xs={4} sm={4} md={4}>
                            <SectionHeader>Contact</SectionHeader>
                            <ItemText><b>Email</b>: jordanomac@gmail.com | <b>Phone</b>: (406)-282-1020</ItemText>
                            <div>
                                <ButtonWrapperBottom onClick={() => this.onContactButtonClick('email')}>
                                    <MdMail style={{ ...IconStyles, ...emailIcon }} /></ButtonWrapperBottom>
                                <ButtonWrapperBottom onClick={() => this.onContactButtonClick('linkedin')}>
                                    <FaLinkedin style={{ ...IconStyles, ...linkedinIcon }} /></ButtonWrapperBottom>
                                <ButtonWrapperBottom onClick={() => this.onContactButtonClick('git')}>
                                    <FaGithub style={{ ...IconStyles, ...ghIcon }} /></ButtonWrapperBottom>
                            </div>
                        </Col>
                        <Col xs={4} sm={4} md={4} />
                    </Row>
                </Fade>
            </WhiteContainer>
        );
    }
}

export default Footer;