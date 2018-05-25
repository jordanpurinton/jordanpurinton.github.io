import React from 'react';
import Reusable from './reusable';
import {Row, Col} from 'react-bootstrap';
import PortfolioCard from './card';

const osLogo = require ('./assets/os-logo.jpg')
const espnLogo = require ('./assets/espn-logo.jpg')
const me = require ('./assets/jordan-purinton-pic.png');
const umtLogo = require('./assets/umt-logo.jpg');
const kaiminLogo = require('./assets/kaimin-logo.jpg');
const satLogo = require('./assets/sayathing.png');
const osPic = require('./assets/os.png');
const espnPic = require('./assets/espn.png');
const simonPic = require('./assets/simon.png');
const dataVizPic = require('./assets/dataviz.png');
const kaiminPic = require('./assets/kaimin.png');
const data = require('./assets/portfolio-data.json');
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
                            <PortfolioCard avatarImg={me} img={satLogo} data={data["0"]}/><br/><br/>
                            <PortfolioCard avatarImg={osLogo} img={osPic} data={data["1"]}/><br/><br/>
                            <PortfolioCard avatarImg={espnLogo} img={espnPic} data={data["2"]}/><br/><br/>
                            <PortfolioCard avatarImg={me} img={simonPic} data={data["3"]}/><br/><br/>
                            <PortfolioCard avatarImg={umtLogo} img={dataVizPic} data={data["4"]}/><br/><br/>
                            <PortfolioCard avatarImg={kaiminLogo} img={kaiminPic} data={data["5"]}/>
                    </Col>
                    <Col xs={4} sm={4} md={4}/>
                </Row>
            </WhiteContainer>
        );
    }
}

export default Portfolio;
