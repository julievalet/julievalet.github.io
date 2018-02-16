import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

import data from '../data-resume.js';

class App extends React.Component {
    constructor() {
        super();

        this.state = { lang: 'en', data: {} };

        this.changeLang = this.changeLang.bind(this);
    }

    componentWillMount() {
        // Get data in correct language
        this.setState({ data: data[this.state.lang] });
    }

    changeLang(lang) {
        // Change language of app
        // console.log('switch lang to ->', lang);
        this.setState({ lang: lang, data: data[lang] });
    }

    render() {
        const resumeData = this.state.data; // All the data of the resume

        return (
            <Router>
                <div>
                    <Header lang={this.state.lang} changeLang={this.changeLang} info={resumeData.info} />
                    <Switch>
                        <Route
                            exact
                            path="/intro"
                            render={() => <Intro lang={this.state.lang} info={resumeData.info} />}
                        />
                        <Route
                            exact
                            path="/about"
                            render={() => (
                                <About
                                    lang={this.state.lang}
                                    about={resumeData.info.about}
                                    workXP={resumeData.workXP}
                                    education={resumeData.education}
                                    onlineEd={resumeData.onlineCourses}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/skills"
                            render={() => <Skills lang={this.state.lang} skills={resumeData.skills} />}
                        />
                        <Route
                            exact
                            path="/work"
                            render={() => <Work lang={this.state.lang} portfolio={resumeData.portfolio} />}
                        />
                        <Route
                            exact
                            path="/contact"
                            render={() => <Contact lang={this.state.lang} info={resumeData.info} />}
                        />
                        <Route render={() => <Intro lang={this.state.lang} info={resumeData.info} />} />
                    </Switch>
                    <Footer info={resumeData.info} />
                </div>
            </Router>
        );
    }
}

export default App;
