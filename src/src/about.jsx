import React from 'react';
import Reusable from './resuable';
import {Row, Col} from 'react-bootstrap';
const BlueContainer = Reusable.BlueContainer;
const ContainerDivider = Reusable.ContainerDivider;
const SectionHeader = Reusable.SectionHeader;
const ItemText = Reusable.ItemText;
const ExternalLink = Reusable.ExternalLink;

class About extends React.Component {
    render() {
        return (
            <BlueContainer>
                <ContainerDivider/>
                <Row>
                    <Col xs={4} sm={4} md={4}/>
                    <Col xs={4} sm={4} md={4}>
                        <SectionHeader>Hello!</SectionHeader>
                        <ItemText>
                            Thank you for visiting my webpage. My name is Jordan Purinton, and below are a few of the things I've built and worked on. I primarily
                            work as a software engineer, focusing on web development and hybrid mobile app development.
                            When I'm not in the matrix, I enjoy working my part time job as a music snob, impulse buying Nintendo
                            Switch games and getting way too invested in sports.
                        </ItemText>
                        <ExternalLink target="_blank" href={require('./assets/JordanPurintonResume.pdf')}>View Resume</ExternalLink>
                    </Col>
                    <Col xs={4} sm={4} md={4}/>
                </Row>
            </BlueContainer>
        );
    }
}

export default About;