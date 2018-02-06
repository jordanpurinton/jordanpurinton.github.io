import * as React from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import Header from './header';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Footer from './footer';

const Container = styled.div`
    vertical-align: middle;
    align-items: center;
    margin: 0;
    padding: 0;`;

class App extends React.Component {
    render() {
        return (
            <FadeIn>
                <Container>
                    <Header/>
                    <About/>
                    <Portfolio/>
                    <Skills/>
                    <Footer/>
                </Container>
            </FadeIn>
        );
    }
}

export default App;
