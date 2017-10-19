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
        
        // console.log(listSkills);
        return (
            <div>
                <div id="intro">
                    <h2>{ resumeData.info.title }</h2>
                    <img src={ `app/${resumeData.info.pathPicture}` } alt="pic"/>
                </div>
                <div id="about">{ listSkills }</div>
                <div id="work"></div>
                <div id="contact"></div>
            </div>
        );
    }
}