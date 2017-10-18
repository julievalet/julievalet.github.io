import React from 'react';
import { ListSkillDev } from './ListSkillDev';

export class App extends React.Component {
    render() {
        const resumeData = this.props.resumeData; // All the data of the resume

        const skillTypes = resumeData.skills.dev; // Dev skills
        let listSkills = [];
        Object.keys(skillTypes).forEach(key => {
            const skillType = <h3 key={key}>{key}</h3>;
            listSkills.push(skillType);
            listSkills = listSkills.concat( // Concat all skills
                skillTypes[key].map( (skill, index) => {
                    return <ListSkillDev item={skill} key={skill.name} />;
                })
            );
        });
            
        // console.log(listSkills);
        return (
            <div>
                <h1>{ resumeData.info.title }</h1>
                <div>{ listSkills }</div>
            </div>
        );
    }
}