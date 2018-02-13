import React from 'react';
import Header from './header';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <section>
                <Header/>
                <About/>
                <Portfolio/>
                <Skills/>
                <Footer/>
            </section>
        );
    }
}

export default App;
