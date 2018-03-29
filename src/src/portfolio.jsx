import React from 'react';
import Fade from 'react-reveal/Fade';
import Reusable from './resuable';
import {Row, Col} from 'react-bootstrap';
import PortfolioCard from './card';

const osPic = require('./assets/os.png');
const espnPic = require('./assets/espn.png');
const simonPic = require('./assets/simon.png');
const dataVizPic = require('./assets/dataviz.png');
const kaiminPic = require('./assets/kaimin.png');
const WhiteContainer = Reusable.WhiteContainer;
const ContainerDivider = Reusable.ContainerDivider;
const SectionHeader = Reusable.SectionHeader;

class Portfolio extends React.Component {
    render() {
        return (
            <WhiteContainer>
                <ContainerDivider/>
                <Row>
                    <Col xs={4} sm={4} md={4}/>
                    <Col xs={4} sm={4} md={4}>
                        <SectionHeader>Portfolio</SectionHeader>
                        <Fade>
                                <PortfolioCard
                                    img={osPic}
                                    title="Orbital Shift Apps"
                                    sub="Mobile Apps"
                                    text="
                                Built and deployed two mobile applications to support an already existing web application,
                                servicing several thousand daily users. Responsible for connecting an MS SQL Server back end
                                with an Angular front end. Led the development of the cross platform mobile apps
                                utilizing the Ionic Framework in order to publish to both the Google Play Store and the
                                iOS App Store."
                                    buttonText="View Employee App"
                                    buttonText2="View Punch Clock App"
                                    link="http://bit.ly/2FOsQwx"
                                    link2="http://bit.ly/2HJ2Ape"/>
                        </Fade><br/><br/>
                        <Fade>
                                    <PortfolioCard
                                        img={espnPic}
                                        title="ESPN Config Tool"
                                        sub="Web App"
                                        text="
                                Built configuration tool for ESPN's BottomLine service (aka the ticker you see at the
                                bottom of your screen with sports news and scores). Allows users to remotely restart the
                                software on a variety of playout machines that ESPN uses to broadcast its various
                                channels. I saw this project end to end, from building the UI and accessing the data, to
                                constructing unit tests and GUI tests using the Mocha and Nightwatch frameworks. Used
                                Node, Express, Handlebars, jQuery and a variety of APIs used to authenticate users and
                                grant data access."/>
                        </Fade><br/><br/>
                        <Fade>
                                    <PortfolioCard
                                        img={simonPic}
                                        title="Simon Says Game"
                                        sub="Desktop App"
                                        text="
                                Built a small version of the classic Simon Says game using turtle graphics and tkSimpleDialog.
                                The game prompts the user with several different colors, and the more colors that the user
                                guesses, the longer the game keeps going. My version of Simon Says features a base easy mode
                                and a hard mode, which has more color options. Depending on your machine setup and version of Python
                                installed, you can run it by pulling down the code and running simon.py."
                                        link="https://bit.ly/2GjbpoB"
                                        buttonText="View Source"/>
                        </Fade><br/><br/>
                        <Fade>
                                    <PortfolioCard
                                        img={dataVizPic}
                                        title="Data Visualization Program"
                                        sub="Web App"
                                        text="
                                Myself and a small team built the front end for professor Rob Smith in the Computer
                                Science department at UM. The program was developed due to the lack of reliable mass
                                spectrometry software that is on the market. The program accepted chemical data and
                                graphed the isotopic signature of the sample within our program. We made sure the front
                                and back ends were communicating properly, primarily using the D3 JavaScript library,
                                jQuery, HTML, CSS and Bootstrap."/>
                        </Fade><br/><br/>
                        <Fade>
                                    <PortfolioCard
                                        img={kaiminPic}
                                        title=" Montana Kaimin Redesign"
                                        sub="Website Redesign"
                                        text="
                                I spent the summer of 2015 redesigning the University of Montana's student newspaper's
                                website www.montanakaimin.com. I focused on presenting a clean and modern UI, intuitive
                                navigation and more consistent and polished content formatting."
                                        link="https://www.montanakaimin.com"
                                        buttonText="View Website"/>
                        </Fade>
                    </Col>
                    <Col xs={4} sm={4} md={4}/>
                </Row>
            </WhiteContainer>
        );
    }
}

export default Portfolio;
