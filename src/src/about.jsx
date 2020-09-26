import React from 'react';
import Reusable from './reusable';
import {Col, Row} from 'react-bootstrap';

const WhiteContainer = Reusable.WhiteContainer;
const ContainerDivider = Reusable.ContainerDivider;
const SectionHeader = Reusable.SectionHeader;
const ItemText = Reusable.ItemText;

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
                            Thanks for stopping by my website! My name is Jordan Purinton, and below are a few of the
                            things I've built and worked on. I primarily
                            work as a software engineer, focusing on cloud computing, web development and hybrid mobile app development.
                            Check out some of my projects and feel free to
                            <a href="mailto:me@jordanpurinton.com?Subject=Response%20From%20Portfolio%20Site" target="_blank" rel="noopener noreferrer">&nbsp;drop me a line</a>.
                        <br/>
                        </ItemText>
                    </Col>
                    <Col xs={4} sm={4} md={4}/>
                </Row>
            </WhiteContainer>
        );
    }
}

export default About;