import * as React from 'react';
import Reusable from './resuable';
import {Row, Col} from 'react-bootstrap';

const GrayContainer = Reusable.GrayContainer;
const SectionHeader = Reusable.SectionHeader;
const ItemText = Reusable.ItemText;
const ExternalLink = Reusable.ExternalLink;

class About extends React.Component {
    render() {
        return (
            <GrayContainer>
                <Row>
                    <Col xs={3} sm={3} md={3}/>
                    <Col xs={6} sm={6} md={6}>
                        <SectionHeader>Hi there!</SectionHeader>
                        <ItemText>
                            My name is Jordan Purinton and I'm a driven young professional who's passionate about
                            leveraging
                            technology to make people's lives better. Some of my interests include mobile
                            engineering,
                            web
                            development, QA automation and tackling complex problems using the most cutting edge
                            technology.
                            In
                            my spare time, I enjoy working my part time job as a music snob, impulse buying Nintendo
                            Switch
                            games and getting way too invested in sports.
                        </ItemText>
                        <ExternalLink target="_blank" href="http://bit.ly/2BPRRVW">View Resume</ExternalLink>
                    </Col>
                    <Col xs={3} sm={3} md={3}/>
                </Row>
            </GrayContainer>
        );
    }
}

export default About;