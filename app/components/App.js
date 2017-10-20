import React from 'react';
import { ListSkillDev, ListSkillLang } from './ListSkillDev';

export class App extends React.Component {
    render() {
        const resumeData = this.props.resumeData; // All the data of the resume
        
        // Dev skills
        const skillTypes = resumeData.skills.dev;
        const listSkills = Object
            .keys(skillTypes)
            .map( skillType => {
                return <ListSkillDev skillType={skillType} skills={skillTypes[skillType]} key={skillType} />;
            });
        // Lang skills
        const langSkills = <ListSkillLang languages={resumeData.skills.languages} />;
        
        // console.log(listSkills);
        return (
            <div>
                <div id="intro">
                    <h2>{ resumeData.info.title }</h2>
                    {<img src={ `app/${resumeData.info.pathPicture}` } alt="pic"/>}
                </div>
                <div id="about"></div>
                <div id="skills">
                    { [langSkills, listSkills] }
                </div>
                <div id="work"></div>
                <div id="contact"></div>
            </div>
        );
    }
}