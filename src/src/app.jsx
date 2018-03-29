import React from 'react';
import Header from './header';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Footer from './footer';
import Fade from 'react-reveal/Fade';

class App extends React.Component {
    render() {
        return (
            <section>
                <Fade>
                <Header/>
                <About/>
                <Portfolio/>
                <Skills/>
                <Footer/>
                </Fade>
            </section>
        );
    }
}

export default App;
