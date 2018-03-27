import React from 'react';
import Reusable from './resuable';
import {Row, Col} from 'react-bootstrap';

const BlueContainer = Reusable.BlueContainer;
const ContainerDivider = Reusable.ContainerDivider;
const SectionHeader = Reusable.SectionHeader;
const ListItem = Reusable.ListItem;
const ItemText = Reusable.ItemText;

class Skills extends React.Component {
    render() {
        return (
            <BlueContainer>
                <ContainerDivider/>
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
                                Android Studio, Xcode, MS SQL Server, JIRA, Postman, TeamCity, JetBrains IDEs, Eclipse,
                                Maven, Version control w/ Git, Adobe Creative Suite
                            </ItemText>
                        </div>
                    </Col>
                    <Col xs={4} sm={4} md={4}/>
                </Row>
            </BlueContainer>
        );
    }
}

export default Skills;