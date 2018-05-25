import React from 'react';
import Reusable from './reusable';
import {Col, Row} from 'react-bootstrap';
import {Button} from '@material-ui/core';

const WhiteContainer = Reusable.WhiteContainer;
const ContainerDivider = Reusable.ContainerDivider;
const SectionHeader = Reusable.SectionHeader;
const ItemText = Reusable.ItemText;

const styles = {
    button: {
        right: '26px'
    },
    span: {
        margin: '13px',
        color: '#007bff',
        fontSize: '15px'
    }
};

class About extends React.Component {
    render() {
        return (
            <WhiteContainer>
                <ContainerDivider/>
                <Row>
                    <Col xs={4} sm={4} md={4}/>
                    <Col xs={4} sm={4} md={4}>
                        <SectionHeader>Hello!</SectionHeader>
                        <ItemText>
                            Thanks for dropping by my website! My name is Jordan Purinton, and below are a few of the
                            things I've built and worked on. I primarily
                            work as a software engineer, focusing on web development and hybrid mobile app development.
                            When I'm not in the matrix, I enjoy working my part time job as a music snob, impulse buying
                            Nintendo
                            Switch games and getting way too invested in sports.
                        </ItemText>
                        <Button style={styles.button} href={require('./assets/JordanPurintonResume.pdf')} target="_blank">
                            <span style={styles.span}>View Resume</span>
                        </Button>
                    </Col>
                    <Col xs={4} sm={4} md={4}/>
                </Row>
            </WhiteContainer>
        );
    }
}

export default About;