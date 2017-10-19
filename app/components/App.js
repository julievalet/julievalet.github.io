import React from 'react';
import { ListSkillDev } from './ListSkillDev';

export class App extends React.Component {
    render() {
        const resumeData = this.props.resumeData; // All the data of the resume

        const skillTypes = resumeData.skills.dev; // Dev skills
        const listSkills = Object
            .keys(skillTypes)
            .map( skillType => {
                return <ListSkillDev skillType={skillType} skills={skillTypes[skillType]} key={skillType} />;
            });
        
        console.log(listSkills);
        return (
            <div>
                <h1>{ resumeData.info.title }</h1>
                <div>{ listSkills }</div>
            </div>
        );
    }
}