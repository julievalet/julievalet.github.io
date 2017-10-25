import React from 'react';
import { ListSkillDev, ListSkillLang } from './ListSkillDev';

export class Skills extends React.Component {
    render() {
        // Dev skills
        const skillTypes = this.props.skills.dev;
        const listSkills = Object
            .keys(skillTypes)
            .map( skillType => {
                return <ListSkillDev skillType={skillType} skills={skillTypes[skillType]} key={skillType} />;
            });
        // Lang skills
        const langSkills = <ListSkillLang languages={this.props.skills.languages} key="lang" />;
        
        return (
            <div id="skills">
                { [langSkills, listSkills] }
            </div>
        );
    }
}