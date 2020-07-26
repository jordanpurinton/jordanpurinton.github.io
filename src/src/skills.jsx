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
                            <ListItem>Languages/Frameworks</ListItem>
                            <ItemText>
                            Python, JavaScript, Bash, TypeScript, Angular, React, Ionic Framework, Java, HTML, CSS
                            </ItemText>
                        </div>
                        <div>
                            <ListItem>AWS</ListItem>
                            <ItemText>
                            EC2/ECS/ECR, CloudFormation, Lambda (SAM), API Gateway, CloudWatch, Dynamodb, Systems Manager, SNS
                            </ItemText>
                        </div>
                        <div>
                            <ListItem>Tools/Misc.</ListItem>
                            <ItemText>
                            Docker, Grafana, Telegraf, InfluxDB, Kafka, Elasticsearch, DataDog, New Relic, TeamCity, GitLab & GitLab CI, GitHub
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