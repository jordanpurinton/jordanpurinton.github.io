import React from 'react';
import Reusable from './reusable';
import {Row, Col} from 'react-bootstrap';
import PortfolioCard from './card';

const geofliLogo = require ('./assets/geofli-logo.png');
const geofliPic = require ('./assets/geofli.png');
const osLogo = require ('./assets/os-logo.jpg')
const espnLogo = require ('./assets/espn-logo.jpg')
const gatherboardLogo = require ('./assets/gatherboard.png');
const gatherboardPic = require ('./assets/gatherboard-app.png');
const umtLogo = require('./assets/umt-logo.jpg');
const kaiminLogo = require('./assets/kaimin-logo.jpg');
const osPic = require('./assets/os.png');
const espnPic = require('./assets/espn.png');
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
                            <PortfolioCard avatarImg={geofliLogo} img={geofliPic} data={data["0"]}/><br/><br/>
                            <PortfolioCard avatarImg={gatherboardLogo} img={gatherboardPic} data={data["1"]}/><br/><br/>
                            <PortfolioCard avatarImg={osLogo} img={osPic} data={data["2"]}/><br/><br/>
                            <PortfolioCard avatarImg={espnLogo} img={espnPic} data={data["3"]}/><br/><br/>
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
