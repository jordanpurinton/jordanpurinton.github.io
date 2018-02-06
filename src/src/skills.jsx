import * as React from 'react';
import Reusable from './resuable';
import {Row, Col} from 'react-bootstrap';

const GrayContainer = Reusable.GrayContainer;
const SectionHeader = Reusable.SectionHeader;
const ListItem = Reusable.ListItem;
const ItemText = Reusable.ItemText;

class Skills extends React.Component {
    render() {
        return (
            <GrayContainer>
                <Row>
                    <Col xs={3} sm={3} md={3}/>
                    <Col xs={6} sm={6} md={6}>
                        <SectionHeader>Skills</SectionHeader>
                        <div>
                            <ListItem>Web/Mobile</ListItem>
                            <ItemText>
                                HTML, CSS, JavaScript, TypeScript, Bootstrap, jQuery,
                                Angular, React, Node.js, Express.js, Ionic Framework
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
                    <Col xs={3} sm={3} md={3}/>
                </Row>
            </GrayContainer>
        );
    }
}

export default Skills;