import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Intro } from './Intro';
import { About } from './About';
import { Skills } from './Skills';
import { Work } from './Work';
import { Contact } from './Contact';

import PropTypes from 'prop-types';

export class App extends React.Component {
    render() {
        const resumeData = this.props.resumeData; // All the data of the resume

        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => <Intro info={resumeData.info} />} />
                        <Route path="/about" render={() => <About data={resumeData} />} />
                        <Route path="/skills" render={() => <Skills skills={resumeData.skills} />} />
                        <Route path="/work" render={() => <Work work={resumeData.workXP} />} />
                        <Route path="/contact" render={() => <Contact info={resumeData.info} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    resumeData: PropTypes.object.isRequired
};
