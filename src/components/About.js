import React from 'react';
import PropTypes from 'prop-types';

class About extends React.Component {
    constructor() {
        super();
        this.renderExperience = this.renderExperience.bind(this);
        this.renderEducation = this.renderEducation.bind(this);
    }

    renderExperience(workXP) {
        return workXP.map((item, index) => (
            <li key={`xp-${index}`}>
                <h5>
                    {item.title} - {item.companyName} - {item.location}
                </h5>
                <h6>{item.year}</h6>
                {item.desc.map((desc, i) => <p key={`desc-${i}`}>{desc}</p>)}
            </li>
        ));
    }

    renderEducation(education) {
        return education.map((item, index) => (
            <li key={`educ-${index}`}>
                <h5>{`${item.diploma} - ${item.location} - ${item.year}`}</h5>
            </li>
        ));
    }

    render() {
        return (
            <div id="about">
                <h3>About</h3>
                <div className="about-me">
                    <p>{this.props.about}</p>
                </div>
                <div className="experience">
                    <h4>Experience</h4>
                    <ul>{this.renderExperience(this.props.workXP)}</ul>
                </div>
                <div className="education">
                    <h4>Education</h4>
                    <ul>{this.renderEducation(this.props.education)}</ul>
                </div>
            </div>
        );
    }
}

About.propTypes = {
    about: PropTypes.string.isRequired,
    workXP: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired
};

export default About;
