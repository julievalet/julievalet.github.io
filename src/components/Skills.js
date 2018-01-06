import React from 'react';
import { ListSkillDev, ListSkillLang } from './ListSkillDev';

import PropTypes from 'prop-types';

/**
 * Display the content of the 'Skills' menu
 * List of different skills with star-rating & time of practice
 */
export class Skills extends React.Component {
    render() {
        // Dev skills
        const skillTypes = this.props.skills.dev;
        const listSkills = Object.keys(skillTypes).map(skillType => (
            <ListSkillDev skillType={skillType} skills={skillTypes[skillType]} key={skillType} />
        ));
        // Lang skills
        const langSkills = <ListSkillLang languages={this.props.skills.languages} key="lang" />;

        return (
            <div id="skills">
                <h3>Skills</h3>
                {[langSkills, listSkills]}
            </div>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.object.isRequired
};
