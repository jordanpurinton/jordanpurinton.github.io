import * as React from 'react';
import styled from 'styled-components';
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
            <Container>
                <Header/>
                <About/>
                <Portfolio/>
                <Skills/>
                <Footer/>
            </Container>
        );
    }
}

export default App;
