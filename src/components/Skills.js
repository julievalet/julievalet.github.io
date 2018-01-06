import React from 'react';
import StarLevel from './StarLevel';
import PropTypes from 'prop-types';

/**
 * Display the content of the 'Skills' menu
 * List of different skills with star-rating & time of practice
 */
class Skills extends React.Component {
    constructor() {
        super();

        this.renderDevSkills = this.renderDevSkills.bind(this);
    }

    renderDevSkills(skillType) {
        const skills = this.props.skills.dev[skillType];

        return (
            <div className="dev-skills" key={skillType}>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="3">
                                <h3>{skillType}</h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map(skill => (
                            <tr key={skill.name}>
                                <td>{skill.name}</td>
                                <td>
                                    <StarLevel level={skill.level} />
                                </td>
                                <td>{skill.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    renderOtherSkills(skillType) {
        const skills = this.props.skills.other[skillType];

        return (
            <div className="dev-skills" key={skillType}>
                <h3>{skillType}</h3>
                {skills.join(', ')}
            </div>
        );
    }

    render() {
        return (
            <div id="skills">
                <h3>Skills</h3>
                {Object.keys(this.props.skills.dev).map(skillType => this.renderDevSkills(skillType))}
                {Object.keys(this.props.skills.other).map(skillType => this.renderOtherSkills(skillType))}
            </div>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.object.isRequired
};

export default Skills;
