import React from 'react';
import Reusable from './reusable';
import { Fab } from '@material-ui/core';
import { MdMail } from 'react-icons/md/index';
import { FaLinkedin } from 'react-icons/fa/index';
import { FaGithub } from 'react-icons/fa/index';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const WhiteContainer = Reusable.WhiteContainer;
const ContainerDivider = Reusable.ContainerDivider;
const ButtonStyles = Reusable.ButtonStyles;
const SectionHeader = Reusable.SectionHeader;

class Footer extends React.Component {

    onContactButtonClick(link) {
        if (link === 'email') {
            window.open('mailto:me@jordanpurinton.com?Subject=Response%20From%20Portfolio%20Site');
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
                            <Fab mini style={ButtonStyles.email} onClick={() => this.onContactButtonClick('email')}>
                                <MdMail />
                            </Fab>
                            <Fab mini style={ButtonStyles.linkedin} onClick={() => this.onContactButtonClick('linkedin')}>
                                <FaLinkedin />
                            </Fab>
                            <Fab mini style={ButtonStyles.github} onClick={() => this.onContactButtonClick('git')}>
                                <FaGithub />
                            </Fab>
                        </Col>
                        <Col xs={4} sm={4} md={4} />
                    </Row>
                </Fade>
            </WhiteContainer>
        );
    }
}

export default Footer;