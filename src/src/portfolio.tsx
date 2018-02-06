import * as React from 'react';
import styled from 'styled-components';
import Reusable from './resuable';

const Tag = require('react-icons/lib/fa/tag');
const osPic = require('./assets/os.png');
const espnPic = require('./assets/espn.png');
const dataVizPic = require('./assets/dataviz.png');
const kaiminPic = require('./assets/kaimin.png');
const {Row, Col} = require('react-bootstrap');
const BlackContainer = Reusable.BlackContainer;
const SectionHeader = Reusable.SectionHeader;
const ListItem = Reusable.ListItem;
const ItemText = Reusable.ItemText;

const ImgWrapper = styled.img`
    width: 100%;
    padding: 8px 0 10px 0`;

const TagContainer = styled.div`
    padding: 8px 0 0 0;`;

const TagText = styled.span`
    padding-left: 8px;
    font-style: italic`;

class Portfolio extends React.Component {
    render() {
        return (
            <BlackContainer>
                <Row>
                    <Col xs={3} sm={3} md={3}/>
                    <Col xs={6} sm={6} md={6}>
                        <SectionHeader>Portfolio</SectionHeader>
                        <div>
                            <ImgWrapper src={osPic} alt={osPic}/>
                            <ListItem>Orbital Shift App</ListItem>
                            <ItemText>
                                Built and deployed a mobile application to support an already existing web application
                                with 10,000+ daily active users. Responsible for connecting an MS SQL Server back-end
                                with an Angular front-end. Led the development of the cross platform mobile app
                                utillizing the Ionic Framework in order to publish to both the Google Play Store and the
                                iOS App Store.
                                <TagContainer><Tag/><TagText><b>front-end, UI/UX, back-end</b></TagText></TagContainer>
                            </ItemText>
                            <ImgWrapper src={espnPic} alt={espnPic}/>
                            <ListItem>ESPN Config Tool</ListItem>
                            <ItemText>
                                Built configuration tool for ESPN's BottomLine service (aka the ticker you see at the
                                bottom of your screen with sports news and scores). Allows users to remotely restart the
                                software on a variety of playout machines that ESPN uses to broadcast its various
                                channels. I saw this project end to end, from building the UI and accessing the data, to
                                constructing unit tests and GUI tests using the Mocha and Nightwatch frameworks. Used
                                Node, Express, Handlebars, jQuery and a variety of APIs used to authenticate users and
                                grant data access.
                                <TagContainer><Tag/><TagText><b>back-end, front-end, QA
                                    automation</b></TagText></TagContainer>
                            </ItemText>
                            <ImgWrapper src={dataVizPic} alt={dataVizPic}/>
                            <ListItem>Data Visualization Program</ListItem>
                            <ItemText>
                                Myself and a small team built the front end for professor Rob Smith in the Computer
                                Science department at UM. The program was developed due to the lack of reliable mass
                                spectrometry software that is on the market. The program accepted chemical data and
                                graphed the isotopic signature of the sample within our program. We made sure the front
                                and back ends were communicating properly, primarily using the D3 JavaScript library,
                                jQuery, HTML, CSS and Bootstrap.
                                <TagContainer><Tag/><TagText><b>front-end, UI/UX</b></TagText></TagContainer>
                            </ItemText>
                            <ImgWrapper src={kaiminPic} alt={kaiminPic}/>
                            <ListItem>Montana Kaimin Redesign</ListItem>
                            <ItemText>
                                I spent the summer of 2015 redesigning the University of Montana's student newspaper's
                                website www.montanakaimin.com. I focused on presenting a clean and modern UI, intuitive
                                navigation and more consistent and polished content formatting.
                                <TagContainer><Tag/><TagText><b>redesign, front-end, UI/UX</b></TagText></TagContainer>
                            </ItemText>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3}/>
                </Row>
            </BlackContainer>
        );
    }
}

export default Portfolio;