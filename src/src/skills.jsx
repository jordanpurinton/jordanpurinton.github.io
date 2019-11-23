import React from 'react';
import Reusable from './reusable';
import {Row, Col} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const WhiteContainer = Reusable.WhiteContainer;
const ContainerDivider = Reusable.ContainerDivider;
const SectionHeader = Reusable.SectionHeader;
const ListItem = Reusable.ListItem;
const ItemText = Reusable.ItemText;

class Skills extends React.Component {
    render() {
        return (
            <WhiteContainer>
                <ContainerDivider/>
                <Fade>
                <Row>
                    <Col xs={4} sm={4} md={4}/>
                    <Col xs={4} sm={4} md={4}>
                        <SectionHeader>Skills</SectionHeader>
                        <div>
                            <ListItem>Web/Mobile</ListItem>
                            <ItemText>
                                HTML, CSS, JavaScript, TypeScript, Bootstrap, jQuery,
                                Angular, React, Node, Express, Ionic Framework
                            </ItemText>
                        </div>
                        <div>
                            <ListItem>QA Automation/Testing</ListItem>
                            <ItemText>
                                Mocha, Chai, Nightwatch,
                                TestNG, Selenium
                            </ItemText>
                        </div>
                        <div>
                            <ListItem>OOP/Scripting</ListItem>
                            <ItemText>
                                Java, C#, Python, Ruby
                            </ItemText>
                        </div>
                        <div>
                            <ListItem>Misc.</ListItem>
                            <ItemText>
                                AWS (ec2, ecs, lambda, cfn, s3), Android Studio, Xcode, MS SQL Server, JIRA, 
                                Postman, Version control w/ Git
                            </ItemText>
                        </div>
                    </Col>
                    <Col xs={4} sm={4} md={4}/>
                </Row>
                </Fade>
            </WhiteContainer>
        );
    }
}

export default Skills;