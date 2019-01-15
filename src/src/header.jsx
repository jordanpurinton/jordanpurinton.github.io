import React from 'react';
import './index.css';
import Fade from 'react-reveal/Fade';
import me from './assets/jordan-purinton-pic.png';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import styled from 'styled-components';
import Reusable from './reusable';
import {Button} from '@material-ui/core';
import MdMail from 'react-icons/lib/md/mail';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';

const ButtonStyles = Reusable.ButtonStyles;
const WhiteContainer = Reusable.WhiteContainer;

const Logo = styled.img`
    margin: 0 16px 0 16px; 
    height: 125px;`;

const NameLabel = styled.h1`
    font-weight: bolder;
    font-size: 64px;
    margin: 8px 0 8px 0;`;

const NameLabelSubhead = styled.h6`
    font-weight: 400;
    margin: 0;`;

const Center = {
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '5%'
};

class Header extends React.Component {

    onContactButtonClick(link) {
        if (link === 'email') {
            window.open('mailto:jordanomac@gmail.com?Subject=Response%20From%20Portfolio%20Site');
        } else if (link === 'linkedin') {
            window.open('https://www.linkedin.com/in/jordanpurinton');
        } else if (link === 'git') {
            window.open('https://www.github.com/jordanpurinton');
        }
    }

    render() {
        return (
            <WhiteContainer style={Center}>
                <Fade>
                    <div>
                        <Logo src={me} />
                    </div>
                </Fade>
                <NameLabel>
                    Hi, I'm Jordan.<br />
                </NameLabel>
                <NameLabelSubhead>
                    <TypistLoop interval={2500}>
                        {[
                            'I build things.',
                            'I design user interfaces.',
                            'I like solving problems.',
                            'I make software easier to use.',
                            'I love symmetry.'
                        ].map(text => <Typist key={text} startDelay={200}>{text}</Typist>)}
                    </TypistLoop>
                </NameLabelSubhead>
                <Fade>
                    <div><br/>
                        <Button variant="fab" mini style={ButtonStyles.email} onClick={() => this.onContactButtonClick('email')}>
                            <MdMail />
                        </Button>
                        <Button variant="fab" mini style={ButtonStyles.linkedin} onClick={() => this.onContactButtonClick('linkedin')}>
                            <FaLinkedin />
                        </Button>
                        <Button variant="fab" mini style={ButtonStyles.github} onClick={() => this.onContactButtonClick('git')}>
                            <FaGithub />
                        </Button>
                    </div>
                </Fade>
            </WhiteContainer>
        );
    }
}

export default Header;
